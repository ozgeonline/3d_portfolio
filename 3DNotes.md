### Npm
- npm create vite@latest ./ -- --template react
- npm install -D tailwindcss
- npx tailwindcss init
- npm install --legacy-peer-deps
- npm i @react-three/fiber
- npm i @react-three/drei
- npm i maath
- npm i react-tilt
- npm i react-vertical-timeline-component
- npm i @emailjs/browser
- npm i framer-motion
- npm i react-router-dom

#### Learn
- framer motion: React library
- import {Suspense} from 'react' : alt öğeleri yüklemeyi bitirene kadar bir geri dönüş görüntülemenizi sağlar.
```js
<Suspense fallback={<CanvasLoader />}> 
```
- Canvas:html öğesi
- OrbitControls : Kullanıcıların kamerayı bir hedef nokta etrafında kaydırmasına, yakınlaştırmasına ve döndürmesine olanak tanır.
- Preload :  ihtiyaç duyulmadan önce varlıkları önceden yüklemek için kullanılabilen bir bileşen. Performansını artırır.
- useGLTF : GLTF modellerini bir React uygulamasında yükler.
- useProgress : Yükleme sürecini izlemenize olanak tanır.

```js
<mesh>
  <hemisphereLight
    intensity={0.35} //ışık parlaklığı
    groundColor='black' //düşen ışık rengi
  />
  <pointLight intensity={13} /> {/* sahnede noktasal ışık oluşturmak için kullanılır. */}
  <spotLight
        position={[-20, 50, 10]}
        angle={0.15} /* açı */
        penumbra={1} /*koni gölgesi*/
        intensity={1} /*ışık yoğunluğu*/
        castShadow
        shadow-mapSize={1024}
      />
  <primitive {/*kutu, küre, düzlem ve koni gibi basit şekiller oluşturmak için kullanılır.*/}
        object={computer.scene} 
        scale={isMobile ? 0.5 : 0.7}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
</mesh>

return (
  <Canvas
    frameloop="demand" //kullanıcı onunla etkileşime girdiğinde oluşturulacağı anlamına gelir
    shadows
    dpr={[1, 2]} //cihaza bağlı olarak 1 veya 2 piksel oranında oluşturulmasını söyler.tüm cihazlarda net görünmesini sağlamak için kullanışlıdır.
    camera={{position: [20, 3, 5], fov: 25}} //position 3 boyutlu koordinatlarla, görüş alanı ise derecelerle belirtilir.
    gl={{preserveDrawingBuffer: true}} //Canvas ın çizim arabelleğini koruyacağı anlamına gelir .
  >
    <Suspense fallback={<CanvasLoader />}> 
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2} // x etrafında dönen eksen oluşturur.
        minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile} />
    </Suspense>
    <Preload all />
  </Canvas>
)
```

- Tilt : Eğim efekti

```js
viewport={{ once: true, amount: 0.25 }} //Framer Motion'a bileşeni yalnızca bir kez, görünüm alanının %25'i içinde görüntüye geldiğinde canlandırmasını söyler.

<motion.p variants={fadeIn("", "" , 0.1, 1)} //yön,hız,süre,gecikme

```


- VerticalTimelineElement
```js
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
//Decal: Obje üzerinde çıkartmalar oluşturur
//Float : Nesnelerin havada yüzmesini sağlayan bileşen.
//OrbitControls : Yörüngeyi kontrol edebilmemizi sağlar.
//Preload : Varlıkların bir sahnede kullanılmadan önce önceden yüklenmesini sağlayan bir bileşen.
//useTexture :  Bir sahnedeki dokuları yüklemek ve kullanmak için hook
```
