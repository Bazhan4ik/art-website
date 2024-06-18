import { isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

@Component({
  selector: 'app-statue',
  standalone: true,
  imports: [],
  templateUrl: './statue.component.html',
  styleUrl: './statue.component.scss'
})
export class StatueComponent implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {};

  @ViewChild("canvasBox") canvas!: ElementRef<HTMLCanvasElement>;



  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.canvasInit();
    }
  }
  

  async canvasInit() {
    const canvas = this.canvas.nativeElement;

    const scene = new THREE.Scene();

    const loader = new GLTFLoader();

    const model = await loader.loadAsync("./../../assets/witch_for_web.glb");
    model.scene.scale.set(2,2,2);


    scene.add(model.scene);

    const canvasSizes = {
      width: 500,
      height: 300,
    };


    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.x = 10;
    light.position.y = 10;
    light.position.z = 10;
    scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.x = 20;
    light2.position.y = 10;
    light2.position.z = 10;
    scene.add(light2);


    const camera = new THREE.PerspectiveCamera(
      75,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
    );
    camera.position.z = 37;
    camera.position.y = 19;
    // camera.position.x = 10;
    // camera.rotateY(1.5708);
    scene.add(camera)

    if(!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setClearColor(0xe23222200, 0);
    renderer.setSize(canvasSizes.width, canvasSizes.height);

    const clock = new THREE.Clock();

    const animateGeometry = () => {
      const elapsedTime = clock.getElapsedTime();

      model.scene.rotation.y = elapsedTime;

      renderer.render(scene, camera);

      window.requestAnimationFrame(animateGeometry);
    }

    animateGeometry();
  }
}
