// Corrected GSAP animation code
gsap.to(".box", { duration: 10, x: 100, y: 100 });

gsap.from("#para",{
    x:-800,
    duration:4
})
gsap.from("#pitch",{
    x:800,
    duration:4
})

gsap.from("#video",{
    y:400,
    duration:2
})