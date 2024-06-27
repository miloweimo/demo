(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hello-threejs"],{7318:function(n,e,t){},"80d9":function(n,e,t){"use strict";t("7318")},b5c0:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n._self._c;return e("div",{staticClass:"wrapper pa-4"},[e("canvas",{staticStyle:{border:"1px solid"},attrs:{id:"c"}}),e("highlightjs",{staticClass:"mt-4",attrs:{code:n.code,language:"js"}})],1)},a=[],r=t("8bc7"),s={data(){return{fov:75,aspect:2,near:.1,far:5,boxWidth:1,boxHeight:1,boxDepth:1,code:"\nimport * as THREE from 'three';\n\nexport default {\n  data() {\n    return {\n      fov: 75, // 相机视野范围\n      aspect: 2, // 画布的宽高比 在默认情况下 canvas画布是300x150像素，所以宽高比为300/150或者说2\n      near: 0.1, // 相机近平面\n      far: 5, // 相机远平面\n\n      boxWidth: 1,\n      boxHeight: 1,\n      boxDepth: 1,\n    };\n  },\n  mounted() {\n    this.main();\n  },\n  methods: {\n    main() {\n      const canvas = document.querySelector('#c');\n      const renderer = new THREE.WebGLRenderer({antialias: true, canvas});\n      const {fov, aspect, near, far} = this;\n      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);\n      console.log(renderer, 'renderer 1', camera, 'camera 1');\n\n      // 摄像机默认指向Z轴负方向，上方向朝向Y轴正方向。我们将会把立方体放置在坐标原点，所以我们需要往后移一下摄像机才能显示出物体\n      camera.position.x = 0;\n      camera.position.z = 3;\n      camera.position.y = 0.8;\n\n      // 然后我们创建一个场景(Scene)。\n      const scene = new THREE.Scene();\n\n      // 然后创建一个包含盒子信息的立方几何体(BoxGeometry)。几乎所有希望在three.js中显示的物体都需要一个包含了组成三维物体的顶点信息的几何体。\n      const {boxWidth, boxHeight, boxDepth} = this;\n      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);\n      // 然后创建一个基本的材质并设置它的颜色. 颜色的值可以用css方式和十六进制来表示。\n      // const material = new THREE.MeshBasicMaterial({color: 0x44aa88});\n      const material = new THREE.MeshPhongMaterial({\n        color: 0x44aa88, // 绿蓝色 受灯光影响的MeshPhongMaterial材质\n      });\n      // 再创建一个网格(Mesh)对象，它包含了 geometry(几何体 物体的形状) material(材质 如何绘制物体，光滑还是平整，什么颜色，什么贴图..)\n      const cube = new THREE.Mesh(geometry, material);\n      // 修改位置\n      cube.position.x = -0.5;\n      cube.position.y = 1.8;\n      cube.position.z = -1.8;\n      \n\n      // 最后我们将网格添加到场景中。\n      scene.add(cube);\n      // 之后将场景和摄像机传递给渲染器来渲染出整个场景。\n      renderer.render(scene, camera);\n\n      // 立方体旋转\n      function render(time) {\n        time *= 0.001;  // 将时间单位变为秒\n      \n        cube.rotation.x = time;\n        cube.rotation.y = time;\n\n        cubes.forEach((cube, ndx) => {\n          const speed = 1 + ndx * .1;\n          const rot = time * speed;\n          cube.rotation.x = rot;\n          cube.rotation.y = rot;\n        });\n      \n        renderer.render(scene, camera);\n      \n        requestAnimationFrame(render);\n      }\n      requestAnimationFrame(render);\n\n      // 灯光\n      const color = 0xFFFFFF;\n      const intensity = 3;\n      const light = new THREE.DirectionalLight(color, intensity);\n      light.position.set(-1, 2, 4); // 位置\n      scene.add(light);\n\n      function makeInstance(geometry, color, x) {\n        const material = new THREE.MeshPhongMaterial({color});\n      \n        const cube = new THREE.Mesh(geometry, material);\n        scene.add(cube);\n      \n        cube.position.x = x;\n      \n        return cube;\n      }\n\n      const cubes = [\n        makeInstance(geometry, 0x44aa88,  0),\n        makeInstance(geometry, 0x8844aa, -2),\n        makeInstance(geometry, 0xaa8844,  2),\n      ];\n      scene.add(cubes);\n\n    },\n  }\n}"}},mounted(){this.main()},methods:{main(){const n=document.querySelector("#c"),e=new r["sb"]({antialias:!0,canvas:n}),{fov:t,aspect:o,near:a,far:s}=this,i=new r["W"](t,o,a,s);console.log(e,"renderer 1",i,"camera 1"),i.position.x=0,i.position.z=3,i.position.y=.8;const c=new r["fb"],{boxWidth:d,boxHeight:m,boxDepth:u}=this,h=new r["d"](d,m,u),l=new r["M"]({color:4500104}),b=new r["K"](h,l);function p(n){n*=.001,b.rotation.x=n,b.rotation.y=n,E.forEach((e,t)=>{const o=1+.1*t,a=n*o;e.rotation.x=a,e.rotation.y=a}),e.render(c,i),requestAnimationFrame(p)}b.position.x=-.5,b.position.y=1.8,b.position.z=-1.8,c.add(b),e.render(c,i),requestAnimationFrame(p);const x=16777215,g=3,w=new r["j"](x,g);function f(n,e,t){const o=new r["M"]({color:e}),a=new r["K"](n,o);return c.add(a),a.position.x=t,a}w.position.set(-1,2,4),c.add(w);const E=[f(h,4500104,0),f(h,8930474,-2),f(h,11176004,2)];c.add(E)}}},i=s,c=(t("80d9"),t("2be6")),d=Object(c["a"])(i,o,a,!1,null,"15702a78",null);e["default"]=d.exports}}]);
//# sourceMappingURL=hello-threejs.babff8df.js.map