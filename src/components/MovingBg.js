import React, {useEffect} from "react";
import "../style/MovingBg.scss";

export const MovingBg = () => {

    const timeFasterAnimation = 6;
    const timeSlowerAnimation = 12;

    useEffect(() => {
        moveBg();
    },[])

    function moveBg(){
        const vectors = document.querySelectorAll(".bgVector");
        console.log(vectors.length);
        vectors.forEach( (vector) => {
            console.log(vector);
            let second = Math.floor(Math.random() * (timeSlowerAnimation - timeFasterAnimation) + timeFasterAnimation);
            vector.style.animation = `${second}s animateBg infinite`
        })
    }

    return(
        <div className="movingBg">
            <svg id="movingBg__container" width="1920" height="944" viewBox="0 0 1920 944" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_2)">
                    <rect width="1920" height="944" fill="white"/>
                    <path className="bgVector" d="M1959.58 -287.241C1934.79 -266.024 1906.4 -248.802 1877.78 -233.196C1794.47 -187.76 1699.8 -154.725 1608.72 -128.804C1513.82 -101.792 1420.54 -98.2756 1322.27 -104.927C1256.2 -109.398 1191.26 -122.19 1126.4 -134.998C1053.3 -149.434 980.278 -164.972 908.123 -183.621C807.467 -209.636 708.492 -241.306 610.066 -274.603C558.773 -291.955 507.617 -308.111 454.625 -319.321C422.078 -326.207 382.996 -335.256 349.677 -329.624" stroke="url(#paint0_linear_1_2)" strokeWidth="600" strokeLinecap="round"/>
                    <path className="bgVector" d="M2141.67 -45.7622C2094.94 -21.8729 2043.04 -12.2597 1992.33 1.30872C1888.81 29.01 1784.56 51.5922 1680.55 77.4958C1609.92 95.0843 1537.83 110.308 1466.18 123.14C1381.17 138.366 1294.47 144.326 1209.02 156.933C1025.95 183.943 841.345 198.947 657.894 223.306C563.215 235.878 468.159 244.986 373.39 256.779C273.702 269.183 173.607 281.796 73.1774 286.16C13.8191 288.74 -45.2835 285.191 -104.598 286.993C-171.352 289.021 -238.341 289.786 -304.777 281.839C-373.083 273.669 -441.369 256.627 -508.754 242.813C-526.645 239.146 -544.047 230.892 -562 229.808" stroke="url(#paint1_linear_1_2)" strokeWidth="600" strokeLinecap="round"/>
                    <path className="bgVector" d="M124.333 1390.85C327.017 1284.65 527.185 1173.79 712.647 1038.1C890.387 908.05 1064.86 772.199 1232.05 628.099C1354.83 522.274 1477.86 410.185 1583.43 285.864C1659 196.873 1729.18 102.249 1788.14 0.558455C1817.28 -49.6959 1843.23 -101.457 1867.59 -154.39C1878.34 -177.752 1896.12 -206.287 1899.96 -233.118C1902.15 -248.372 1900.13 -267.054 1896.13 -282" stroke="url(#paint2_linear_1_2)" strokeWidth="600" strokeLinecap="round"/>
                    <path className="bgVector" d="M2144 -180C1920.75 -129.799 1698.73 -74.4544 1484.5 8.68982C1279.18 88.3722 1075.52 174.506 876.769 270.493C730.808 340.984 582.982 417.46 448.862 510.266C352.857 576.699 260.6 649.965 177.357 732.959C136.219 773.973 97.7728 817.267 60.5571 862.104C44.1315 881.894 19.5865 904.864 8.93719 929.79C2.88295 943.96 0 962.528 0 978" stroke="url(#paint3_linear_1_2)" strokeWidth="600" strokeLinecap="round"/>
                    <path className="bgVector" d="M2106.47 519.651C2093.61 471.586 2054.28 430.273 2015.76 398.903C1949.08 344.613 1873 297.092 1789.49 269.421C1726.67 248.606 1662.92 229.809 1598.07 215.099C1540.66 202.075 1482.74 195.585 1423.98 189.17C1286.42 174.149 1146.41 175.827 1007.97 192.448C830.058 213.806 651.969 229.923 474.504 255.709C359.792 272.377 247.028 306.577 135.134 336.518" stroke="url(#paint4_linear_1_2)" strokeWidth="600" strokeLinecap="round"/>
                    <path className="bgVector" d="M81 -215C81 -165.244 108.31 -115.169 137.419 -74.9067C187.798 -5.22586 249.006 60.3455 322.528 108.664C377.833 145.01 434.554 179.645 493.398 210.619C545.491 238.04 599.768 259.282 654.865 280.666C783.872 330.736 919.557 365.306 1057.59 385.037C1234.97 410.392 1411.18 440.858 1589.28 461.821C1704.4 475.372 1822.17 471.483 1938 471.483" stroke="url(#paint5_linear_1_2)" strokeWidth="600" strokeLinecap="round"/>
                    <path className="bgVector" d="M-413.481 527.819C-362.161 516.822 -309.539 520.951 -257.049 520.951C-149.883 520.951 -43.3466 526.082 63.8298 527.946C136.603 529.212 210.179 533.14 282.709 539.265C368.772 546.533 454.065 563.186 539.869 573.095C723.699 594.325 905.906 627.55 1089.42 651.439C1184.13 663.768 1278.31 679.54 1372.91 692.646C1472.41 706.431 1572.37 720.12 1670.51 741.865C1728.52 754.717 1784.69 773.423 1842.46 787.014C1907.47 802.311 1972.38 818.887 2034.5 843.737C2098.37 869.286 2159.93 903.4 2221.46 934.163C2237.79 942.33 2252.47 954.802 2269.53 960.49" stroke="url(#paint6_linear_1_2)" strokeWidth="600" strokeLinecap="round"/>
                    <path className="bgVector" d="M-300 808.16C-270.566 794.072 -238.688 784.774 -207.011 777.096C-114.781 754.74 -14.7933 747.299 79.889 745.801C178.551 744.239 269.564 764.953 362.781 796.782C425.445 818.178 484.877 847.323 544.22 876.461C611.101 909.301 677.625 943.187 742.507 979.853C833.017 1031 920.442 1087.18 1006.92 1144.79C1051.98 1174.81 1097.22 1203.64 1145.52 1228.17C1175.18 1243.23 1210.59 1262.08 1244.23 1265.25" stroke="url(#paint7_linear_1_2)" strokeWidth="600" strokeLinecap="round"/>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1_2" x1="1709.16" y1="-457.123" x2="-262.596" y2="2108.76" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#405174"/>
                        <stop offset="1" stopColor="#DAE6FF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_2" x1="760.95" y1="-16.0283" x2="714.493" y2="344.224" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#25375A"/>
                        <stop offset="0.965985" stopColor="#334E75"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_2" x1="255.751" y1="651.76" x2="374.055" y2="1295.04" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0B1120"/>
                        <stop offset="0.866387" stopColor="#172342"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_1_2" x1="1826" y1="500" x2="1878" y2="-152" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0B1120"/>
                        <stop offset="0.866387" stopColor="#172342"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_1_2" x1="1048.05" y1="514.053" x2="1020.68" y2="148.711" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2C3A5F"/>
                        <stop offset="1" stopColor="#121A2F"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_1_2" x1="1102" y1="64" x2="1034" y2="424" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2C3A5F"/>
                        <stop offset="1" stopColor="#121A2F"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_1_2" x1="928" y1="856" x2="1066" y2="520" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#25375A"/>
                        <stop offset="0.965985" stopColor="#334E75"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_1_2" x1="-102" y1="1037" x2="2466" y2="-932" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#405174"/>
                        <stop offset="1" stopColor="#DAE6FF"/>
                    </linearGradient>
                    <clipPath id="clip0_1_2">
                        <rect width="1920" height="944" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

        </div>
    )
}