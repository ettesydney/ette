// 'use client'

// import { useEffect, useState } from "react";

// type HeaderLogoProps = {
//   imageData: {
//     asset?: {
//       url: string;
//     };
//     alt?: string;
//   };
// }

// export default function HeaderLogo({ imageData }: HeaderLogoProps) {
//   const [logoColor, setLogoColor] = useState("#FFFFFF"); // Start with white for dark section
  
//   useEffect(() => {
//     console.log("HeaderLogo component mounted");
    
//     // Define section colors
//     const sectionColors = {
//       'dark': "#fce7f2", // White logo for dark backgrounds
//       'light': "#000000" // Black logo for light backgrounds
//     };
    
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px 0px -25% 0px",
//       threshold: 0.1,
//     };
    
//     const observerCallback = (entries: any) => {
//       console.log("Observer callback triggered with entries:", entries.length);
      
//       entries.forEach(entry => {
//         console.log(`Section ${entry.target.getAttribute('data-section')}:`, {
//           isIntersecting: entry.isIntersecting,
//           boundingClientRect: entry.boundingClientRect,
//           intersectionRatio: entry.intersectionRatio
//         });
        
//         // When a section exits the viewport (going up), change the logo color
//         if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
//           const sectionType = entry.target.getAttribute('data-section');
//           console.log(`Section ${sectionType} exiting upward, changing logo color to`, sectionColors[sectionType === 'dark' ? 'light' : 'dark']);
          
//           // If the dark section is exiting upward, switch to light section color
//           if (sectionType === 'dark') {
//             setLogoColor(sectionColors['light']);
//           } 
//           // If the light section is exiting upward, switch to dark section color
//           else if (sectionType === 'light') {
//             setLogoColor(sectionColors['dark']);
//           }
//         }
//         // When a section enters from the bottom, set its color
//         else if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
//           const sectionType = entry.target.getAttribute('data-section');
//           console.log(`Section ${sectionType} entering from bottom, changing logo color to`, sectionColors[sectionType]);
//           setLogoColor(sectionColors[sectionType]);
//         }
//       });
      
//       console.log("Current logo color:", logoColor);
//     };
    
//     // Create and set up the observer
//     const observer = new IntersectionObserver(observerCallback, observerOptions);
    
//     // Select all sections
//     const sections = document.querySelectorAll('[data-section]');
//     console.log("Found sections:", sections.length);
    
//     sections.forEach(section => {
//       const sectionType = section.getAttribute('data-section');
//       console.log(`Observing section: ${sectionType}`);
//       observer.observe(section);
//     });
    
//     return () => {
//       console.log("Cleaning up observer");
//       sections.forEach(section => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);
  
//   console.log("Rendering HeaderLogo with color:", logoColor);
  
//   return (
//     <div className="logo w-1/4 pl-4 pt-4 z-[11] lg:text-left max-w-[150px]">
//        <svg
//         viewBox="0 0 555 269"
//         version="1.1"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         id="Layer_1"
//         width="200"
//         height="100"
//       >
//         <defs>
//           <clipPath id="clippath">
//             <rect height="258.07" width="540.52" y="5.97" x="7.87"></rect>
//           </clipPath>
//         </defs>
//         <g>
//           <path
//             d="M30.5,102.14c74.16-1.57,100.88-23.88,100.88-45.57,0-11.94-7.86-19.8-24.52-19.8-35.83,0-65.99,31.43-76.36,65.37M28.3,110.62c-1.26,5.65-1.89,11.32-1.89,16.97,0,27.98,16.97,41.17,40.53,41.17,21.06,0,39.29-8.48,59.41-31.74l6.28,2.83c-17.27,28.6-36.77,46.2-69.46,46.2S7.87,165.93,7.87,131.05c0-48.4,46.5-102.14,102.76-102.14,23.26,0,40.23,7.54,40.23,27.97,0,28.91-33.31,53.74-122.56,53.74"
//             className="st1"
//             style={{ fill: logoColor, transition: "fill 0.3s ease" }}
//           ></path>
//           <path
//             d="M237.55,48.08l-41.49,84.22c-6.29,12.89-7.54,17.6-7.54,21.69,0,8.17,5.97,13.51,15.4,13.51,16.03,0,32.67-11.01,51.86-31.43l5.97,2.82c-14.77,20.11-35.2,45.57-64.12,45.57-17.9,0-28.29-10.68-28.29-24.83,0-6.92,1.26-13.83,11.32-33l41.49-78.57h-52.81l3.15-9.75h53.43l12.88-30.48,22-1.89-18.21,32.37h54.67l-3.45,9.75h-56.26Z"
//             className="st1"
//             style={{ fill: logoColor, transition: "fill 0.3s ease" }}
//           ></path>
//           <path
//             d="M361.07,48.08l-41.49,84.22c-6.27,12.89-7.54,17.6-7.54,21.69,0,8.17,5.97,13.51,15.4,13.51,16.03,0,32.69-11.01,51.86-31.43l5.97,2.82c-14.77,20.11-35.2,45.57-64.1,45.57-17.92,0-28.29-10.68-28.29-24.83,0-6.92,1.26-13.83,11.31-33l41.49-78.57h-52.8l3.14-9.75h53.43l12.89-30.48,22-1.89-18.23,32.37h54.69l-3.46,9.75h-56.26Z"
//             className="st1"
//             style={{ fill: logoColor, transition: "fill 0.3s ease" }}
//           ></path>
//           <path
//             d="M428.02,102.14c74.16-1.57,100.88-23.88,100.88-45.57,0-11.94-7.86-19.8-24.5-19.8-35.83,0-66.01,31.43-76.38,65.37M425.82,110.62c-1.26,5.65-1.88,11.32-1.88,16.97,0,27.98,16.97,41.17,40.54,41.17,21.06,0,39.29-8.48,59.39-31.74l6.29,2.83c-17.29,28.6-36.78,46.2-69.46,46.2s-55.32-20.11-55.32-55c0-48.4,46.52-102.14,102.78-102.14,23.24,0,40.23,7.54,40.23,27.97,0,28.91-33.32,53.74-122.58,53.74"
//             className="st1"
//             style={{ fill: logoColor, transition: "fill 0.3s ease" }}
//           ></path>
//           <path
//             d="M361.46,263.46h3.31v-10.79l11.51-15.81h-3.99l-9.16,12.92h-.08l-9.16-12.92h-3.95l11.51,15.81v10.79ZM321.11,263.46h19.11v-3h-15.85v-9.31h14.63v-2.85h-14.63v-8.44h15.85v-3h-19.11v26.6ZM284.06,263.46h3.27v-21.96h.08l16,21.96h3.61v-26.6h-3.31v21.96h-.08l-16-21.96h-3.57v26.6ZM251.26,260.46v-20.6h6.95c6.57,0,9.88,3.42,9.88,10.3s-3.31,10.3-9.96,10.3h-6.88ZM248,263.46h10.26c8.51,0,13.22-4.45,13.22-13.3s-4.83-13.3-13.15-13.3h-10.34v26.6ZM222.31,263.46h3.31v-10.79l11.51-15.81h-3.99l-9.16,12.92h-.08l-9.16-12.92h-3.95l11.51,15.81v10.79ZM181.31,254.12c.65,6.27,5.21,9.92,12.46,9.92,6.27,0,10.37-3,10.37-7.6s-2.93-6.69-11.1-8.36c-5.93-1.22-7.75-2.24-7.75-4.52,0-2.58,2.62-4.33,6.46-4.33,4.26,0,7.18,2.2,7.9,6l3.23-.65c-.84-4.9-5.28-8.28-11.1-8.28s-9.77,3.04-9.77,7.33c0,3.91,2.62,5.85,10.22,7.37,6.5,1.37,8.59,2.62,8.59,5.51s-2.74,4.6-7.03,4.6c-5.59,0-8.63-2.43-9.27-7.49l-3.23.49Z"
//             className="st1"
//             style={{ fill: logoColor, transition: "fill 0.3s ease" }}
//           ></path>
//         </g>
//       </svg>
//     </div>
//   );
// }