import Link from "next/link";
import styles from "../styles/components/header.module.scss";
import HeaderLogoChanger from "../hooks/headerLogoChanger";
import MobileMenuOpener from "../hooks/mobileMenuOpener";
export default function Header() {
  const { isBlogPage } = HeaderLogoChanger();
  const { toggle, spMenuContent } = MobileMenuOpener();

  return (
    <>
      {/* ドロワー開閉ボタン */}
      <div className={styles.btnContainer}>
        <button className={styles.humMenuBtn} onClick={toggle}>
          <div className={styles.humburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* ヘッダー */}
      <header className={styles.headerContainer}>
        <div className={styles.headerItem}>
          {isBlogPage ? (
            <>
              <Link href="/blog" passHref>
                <div>
                  <svg
                    className={styles.svgLogo}
                    width="137"
                    height="56"
                    viewBox="0 0 137 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M6.60052 25.4844C6.67677 28.7538 7.39686 31.9763 8.7194 34.9679C10.0095 34.1786 10.9638 33.773 11.5704 33.515C11.7722 33.4294 11.9354 33.36 12.06 33.2982C12.3222 33.1681 12.4642 32.9862 12.576 32.8428C12.6772 32.7133 12.7536 32.6154 12.8719 32.6157C13.1211 32.6164 15.8027 31.7525 17.4257 30.6988C18.0176 30.3145 18.5826 30.1379 19.1713 29.954C20.197 29.6336 21.2944 29.2909 22.7301 27.7876C23.1786 27.318 22.6701 27.0606 22.3651 26.9061C22.1991 26.8221 22.0933 26.7685 22.2346 26.7279C22.5545 26.6359 23.0877 26.655 23.7349 26.6782C24.9243 26.7208 26.4993 26.7771 27.8438 26.1836C29.0359 25.6573 29.803 25.2259 30.5193 24.8232C31.6017 24.2145 32.5674 23.6715 34.7066 22.9657C36.5838 22.922 34.241 21.7263 32.9049 21.0445V21.0444H32.9048C32.4502 20.8123 32.1122 20.6399 32.0965 20.5924C32.0817 20.5472 32.4164 20.6633 32.9379 20.8442C34.5717 21.4112 38.038 22.6137 38.3245 21.482C38.5842 20.4566 37.9018 20.1331 37.3885 19.8899C37.1543 19.7789 36.9553 19.6844 36.8971 19.5477C36.8279 19.385 37.2947 19.4922 37.9916 19.652C39.1641 19.9211 40.9878 20.3394 42.0052 19.8737C43.6273 19.1312 54.3124 14.84 54.3124 14.84C52.9899 11.8484 51.0905 9.14648 48.7231 6.88854C46.3555 4.63048 43.566 2.86048 40.514 1.67973C37.4619 0.498938 34.2069 -0.0695773 30.9351 0.00664262C27.6631 0.0828625 24.4382 0.802323 21.4445 2.12395C18.4508 3.44562 15.747 5.34346 13.4873 7.7093C11.2277 10.0751 9.45643 12.8625 8.27481 15.9123C7.0932 18.9622 6.52426 22.2148 6.60052 25.4844ZM15.9184 47.7698C15.5231 47.4423 15.1386 47.1032 14.7652 46.7528C15.692 46.6632 16.4655 44.2662 16.4545 43.4705C16.4413 42.5254 17.1453 41.5424 17.1453 41.5424C18.0782 40.6542 18.3308 41.4991 18.5239 42.1448C18.6413 42.5371 18.7366 42.8559 18.949 42.6683C19.1186 42.5186 19.3739 42.0524 19.6803 41.4928C20.3903 40.1962 21.3744 38.399 22.1999 38.8797C23.0357 39.3665 22.9428 41.1517 22.8983 42.0061C22.8798 42.3598 22.8697 42.554 22.9373 42.4307C23.1228 42.0916 23.3078 40.8577 23.5077 39.5254C23.7663 37.8021 24.0494 35.9144 24.39 35.5862C25.8103 34.2179 26.6523 38.544 27.2419 41.573C27.5083 42.9413 27.7232 44.045 27.9166 44.2393C28.0834 44.407 28.1533 43.9311 28.2601 43.2027C28.5512 41.2191 29.1171 37.3625 32.6653 39.5212C35.9916 41.5447 36.1699 38.2218 36.2948 35.8935C36.3521 34.826 36.3982 33.9676 36.7312 33.9295C36.8296 33.9174 36.9751 33.816 37.1488 33.6946C37.8559 33.2009 39.032 32.3799 39.4142 35.9294C39.8904 40.3513 42.3158 33.9454 41.2859 31.7011C40.256 29.4568 40.5599 25.8213 40.7425 25.6603C40.9021 25.5195 41.1644 25.2703 41.4781 24.9722L41.4789 24.9716V24.9715C42.7118 23.8002 44.737 21.8762 44.4363 22.8181C44.2462 23.4137 44.4633 23.2171 44.805 22.9076C45.1416 22.6029 45.5989 22.1887 45.9077 22.3131C46.2128 22.4361 46.3231 22.6185 46.4296 22.7945C46.5403 22.9776 46.6469 23.1539 46.9642 23.2501C47.212 23.1727 47.8616 22.4129 48.5197 21.6431C49.1978 20.8497 49.885 20.0459 50.1512 19.967C50.9996 19.7157 51.297 20.3033 51.451 20.6076C51.5072 20.7184 51.5442 20.7917 51.582 20.7728C51.7309 20.699 51.964 20.1739 52.2505 19.5286C52.6248 18.6854 53.0903 17.637 53.5783 17.1213L53.8643 16.9703C55.3926 19.8624 56.3357 23.0269 56.6401 26.2832C56.9444 29.5394 56.604 32.8237 55.6381 35.9485C54.6723 39.0732 53.0999 41.9774 51.0109 44.495C48.9219 47.0125 46.3571 49.0942 43.4629 50.6213C40.5689 52.1484 37.4021 53.0909 34.1434 53.395C30.8847 53.6992 27.5981 53.3589 24.471 52.3937C21.344 51.4285 18.4377 49.8574 15.9184 47.7698ZM53.8118 16.9191C53.7336 16.9712 53.6556 17.0396 53.5783 17.1213L31.8259 28.5989L9.7875 40.2274C11.0759 42.6657 12.7589 44.87 14.7652 46.7528C14.7592 46.7534 14.7531 46.7539 14.747 46.7543C14.7217 46.7559 14.5503 46.6334 14.4362 46.5043C14.4139 46.4805 14.3892 46.4601 14.3626 46.4382C14.3109 46.3955 14.2517 46.3468 14.1876 46.2545C14.171 46.2306 14.1487 46.2159 14.1238 46.1994C14.0846 46.1735 14.0392 46.1436 14.0013 46.0672C13.2212 45.3413 12.9661 49.1156 12.7541 52.2539C12.6144 54.3211 12.4934 56.1122 12.2532 56.1596C11.8717 56.2969 11.9216 55.2828 11.9976 53.7334C12.0584 52.4958 12.1359 50.9167 12.0236 49.3103C11.7728 45.7177 10.4964 41.6173 9.73492 40.1762L31.7734 28.5477L53.8118 16.9191ZM6.68338 39.5422L58.3872 13.4037L58.556 13.7372L6.85222 39.8758L6.68338 39.5422ZM10.97 26.7178C11.2001 26.8536 11.5065 26.9769 11.8916 27.0146C12.0054 27.0257 12.0925 27.1275 12.0748 27.2405C12.0613 27.3276 11.989 27.3934 11.9015 27.4049C11.5783 27.447 11.0756 27.5606 10.5766 27.6852C10.0737 27.8109 9.68208 27.2182 10.0059 26.8134C10.2251 26.5395 10.6678 26.5395 10.97 26.7178ZM17.8628 24.368C17.9808 24.4455 18.1351 24.3487 18.1172 24.2087C18.1106 24.1571 18.081 24.1121 18.0361 24.0857C17.7444 23.9141 16.5756 23.2068 15.011 21.9976C13.7159 20.9968 12.9062 20.2367 12.549 19.8838C12.4252 19.7616 12.2295 19.7442 12.0893 19.8473C11.9063 19.9819 11.9031 20.2536 12.0841 20.3911C12.6561 20.8258 13.7975 21.6813 14.6734 22.2635C15.6209 22.8932 17.2054 23.9358 17.8628 24.368ZM19.1364 26.0593C19.172 26.1187 19.1217 26.1927 19.0533 26.181C18.6722 26.116 17.7536 25.9587 17.2031 25.8619C16.9224 25.8126 16.3582 25.8253 15.7794 25.8584C15.4112 25.8796 15.2605 25.3563 15.5889 25.1885C15.6969 25.1333 15.8272 25.1404 15.9353 25.1955C16.1537 25.3069 16.591 25.4977 17.3027 25.6759C18.2452 25.912 18.9106 26.0001 19.0756 26.0199C19.101 26.0229 19.1232 26.0373 19.1364 26.0593ZM17.3553 47.6223C17.8979 45.9021 18.4937 43.7536 18.3307 43.0597C18.3197 43.0129 18.3111 42.968 18.3115 42.92C18.315 42.492 18.4963 42.4769 18.5156 42.9045C18.594 44.63 18.6009 47.0487 18.6011 47.8503C18.6011 48.0225 18.5283 48.1861 18.401 48.3022C17.9266 48.7347 17.162 48.2344 17.3553 47.6223Z" />
                      <path d="M62.7859 30V26.58H70.9156C71.3132 26.58 71.6744 26.4805 71.9997 26.2815C72.3248 26.0823 72.5868 25.82 72.7855 25.4943C72.9842 25.1505 73.0836 24.7796 73.0836 24.3814C73.0836 23.9652 72.9842 23.5943 72.7855 23.2685C72.5868 22.9248 72.3248 22.6534 71.9997 22.4543C71.6744 22.2552 71.3132 22.1557 70.9156 22.1557H67.745C66.6791 22.1557 65.7126 21.9386 64.8454 21.5043C63.9782 21.07 63.2827 20.4457 62.7588 19.6314C62.2529 18.799 62 17.8038 62 16.6457C62 15.5057 62.2439 14.5195 62.7317 13.6872C63.2195 12.8367 63.8789 12.1762 64.7099 11.7057C65.541 11.2352 66.4623 11 67.474 11H75.7122V14.42H67.8534C67.4921 14.42 67.1579 14.5195 66.8508 14.7185C66.5436 14.8996 66.2997 15.1438 66.1191 15.4514C65.9565 15.7591 65.8752 16.1028 65.8752 16.4829C65.8752 16.8628 65.9565 17.2067 66.1191 17.5143C66.2997 17.8219 66.5436 18.0662 66.8508 18.2471C67.1579 18.4281 67.4921 18.5186 67.8534 18.5186H71.1324C72.3068 18.5186 73.3275 18.7448 74.1946 19.1972C75.0619 19.6495 75.7303 20.2828 76.2 21.0971C76.6878 21.9114 76.9317 22.8614 76.9317 23.9471C76.9317 25.2319 76.6788 26.3267 76.1729 27.2314C75.6852 28.1362 75.0167 28.8238 74.1676 29.2943C73.3365 29.7648 72.4151 30 71.4034 30H62.7859ZM84.6273 30C83.5794 30 82.6219 29.7467 81.7548 29.24C80.9056 28.7333 80.2281 28.0547 79.7223 27.2043C79.2164 26.3357 78.9635 25.3766 78.9635 24.3271C78.9635 23.5672 79.1261 22.8524 79.4513 22.1829C79.7765 21.5133 80.2191 20.9252 80.7791 20.4185C80.2191 19.9119 79.7765 19.3238 79.4513 18.6543C79.1261 17.9848 78.9635 17.2791 78.9635 16.5372C78.9635 15.5057 79.2074 14.5738 79.6952 13.7414C80.2011 12.9091 80.8695 12.2486 81.7006 11.76C82.5496 11.2533 83.4801 11 84.4918 11H92.2963V14.42H84.9253C84.546 14.42 84.1937 14.5195 83.8685 14.7185C83.5613 14.8996 83.3084 15.1529 83.1097 15.4785C82.9291 15.7862 82.8387 16.139 82.8387 16.5372C82.8387 16.9171 82.9291 17.27 83.1097 17.5957C83.3084 17.9034 83.5613 18.1566 83.8685 18.3557C84.1937 18.5367 84.546 18.6272 84.9253 18.6272H91.375V22.0472H85.088C84.6724 22.0472 84.2931 22.1557 83.9498 22.3728C83.6066 22.5719 83.3356 22.8433 83.1368 23.1871C82.938 23.531 82.8387 23.9109 82.8387 24.3271C82.8387 24.7434 82.938 25.1233 83.1368 25.4672C83.3356 25.8109 83.6066 26.0823 83.9498 26.2815C84.2931 26.4805 84.6724 26.58 85.088 26.58H92.2963V30H84.6273ZM94.4715 24.7343V21.3415H102.141V24.7343H94.4715ZM107.785 30C107.062 30 106.43 29.8462 105.888 29.5385C105.346 29.2129 104.921 28.7876 104.614 28.2629C104.325 27.7381 104.181 27.15 104.181 26.4986C104.181 25.8833 104.334 25.2862 104.641 24.7071C104.967 24.1281 105.382 23.6576 105.888 23.2957L111.714 19.1158C112.112 18.8262 112.41 18.4824 112.609 18.0843C112.807 17.6861 112.907 17.27 112.907 16.8357C112.907 16.3291 112.798 15.9038 112.581 15.56C112.365 15.1981 112.058 14.9177 111.66 14.7185C111.263 14.5195 110.784 14.42 110.224 14.42H105.21V11H110.685C111.931 11 113.006 11.2623 113.909 11.7871C114.813 12.3119 115.508 13.0176 115.996 13.9043C116.502 14.7728 116.755 15.75 116.755 16.8357C116.755 17.9214 116.538 18.8805 116.104 19.7128C115.689 20.5272 115.002 21.26 114.045 21.9114L108.218 25.8743C108.182 25.8924 108.137 25.9376 108.083 26.01C108.029 26.0642 108.002 26.1367 108.002 26.2272C108.002 26.3538 108.038 26.4443 108.11 26.4986C108.182 26.5528 108.282 26.58 108.408 26.58H117.324V30H107.785ZM120.049 30L127.989 15.2614C128.08 15.0805 128.125 14.9267 128.125 14.8C128.125 14.6914 128.089 14.6009 128.016 14.5286C127.944 14.4562 127.845 14.42 127.718 14.42H119.074V11H128.206C128.911 11 129.543 11.1628 130.103 11.4886C130.681 11.8143 131.142 12.2486 131.485 12.7915C131.828 13.3162 132 13.9133 132 14.5828C132 14.9448 131.955 15.3067 131.864 15.6686C131.774 16.0124 131.657 16.3381 131.512 16.6457L124.439 30H120.049Z" />
                      <path d="M72.543 36.029C72.751 36.367 72.959 36.744 73.141 37.082C73.232 37.251 73.401 37.303 73.557 37.238L74.181 36.978C74.376 36.887 74.441 36.705 74.337 36.523C74.142 36.185 73.895 35.756 73.674 35.418C73.596 35.288 73.427 35.236 73.284 35.301L72.699 35.535C72.465 35.626 72.413 35.821 72.543 36.029ZM72.543 36.939C72.374 36.588 72.114 36.12 71.867 35.73C71.789 35.6 71.633 35.548 71.477 35.613L70.866 35.86C70.658 35.951 70.593 36.133 70.71 36.328C70.801 36.484 70.879 36.627 70.97 36.757V36.783C71.048 36.926 70.996 37.043 70.827 37.056H65.029C64.73 37.056 64.197 37.017 63.794 36.991C63.573 36.965 63.43 37.095 63.43 37.316V38.707C63.43 38.915 63.573 39.045 63.781 39.032C64.132 39.019 64.6 38.993 65.029 38.993H70.086C70.307 38.993 70.437 39.149 70.398 39.37C70.203 40.293 69.813 41.372 69.111 42.217C68.227 43.296 66.706 44.31 65.055 44.856C64.756 44.947 64.691 45.155 64.886 45.389L65.991 46.663C66.082 46.767 66.212 46.806 66.342 46.754C68.357 46 69.969 44.713 70.944 43.4C72.01 41.97 72.465 40.046 72.777 38.889C72.829 38.694 72.894 38.408 72.985 38.161C73.037 38.005 72.998 37.836 72.855 37.745L72.413 37.446C72.309 37.368 72.309 37.277 72.426 37.225H72.452C72.569 37.186 72.608 37.069 72.543 36.939ZM86.323 38.421C86.323 38.109 86.323 37.758 86.336 37.433C86.336 37.225 86.206 37.082 85.998 37.095H78.172C77.886 37.095 77.496 37.082 77.093 37.082C76.885 37.069 76.755 37.212 76.755 37.42C76.768 37.758 76.768 38.135 76.768 38.421V44.414C76.768 44.869 76.755 45.545 76.742 45.948C76.729 46.156 76.859 46.286 77.067 46.286H78.471C78.666 46.286 78.796 46.156 78.796 45.948C78.796 45.753 78.926 45.623 79.121 45.623H83.97C84.178 45.623 84.308 45.753 84.295 45.948C84.282 46.156 84.412 46.286 84.62 46.286H86.024C86.219 46.286 86.349 46.156 86.349 45.961C86.336 45.532 86.323 44.804 86.323 44.44V38.421ZM84.321 39.201V43.517C84.321 43.634 84.243 43.712 84.126 43.712H78.978C78.861 43.712 78.783 43.634 78.783 43.517V39.201C78.783 39.084 78.861 39.006 78.978 39.006H84.126C84.243 39.006 84.321 39.084 84.321 39.201ZM98.634 35.977C98.842 36.315 99.063 36.705 99.232 37.056C99.323 37.212 99.492 37.277 99.661 37.212L100.22 36.978C100.415 36.887 100.48 36.705 100.376 36.523C100.181 36.172 99.934 35.73 99.713 35.379C99.635 35.249 99.466 35.197 99.323 35.262L98.79 35.47C98.556 35.561 98.504 35.756 98.634 35.977ZM98.855 37.134C98.66 36.77 98.413 36.328 98.192 35.977C98.114 35.834 97.945 35.782 97.802 35.847L97.256 36.068C97.035 36.159 96.97 36.354 97.1 36.562C97.23 36.783 97.36 37.03 97.49 37.277C97.594 37.485 97.516 37.667 97.282 37.706C97.035 37.745 96.762 37.771 96.515 37.771H94.89C94.565 37.771 94.448 37.576 94.604 37.29C94.682 37.16 94.76 37.004 94.851 36.848C94.968 36.627 94.903 36.432 94.656 36.367L93.148 35.899C92.953 35.834 92.797 35.925 92.732 36.133C92.602 36.549 92.407 37.017 92.251 37.303C91.757 38.213 90.834 39.747 89.183 40.982C88.962 41.151 88.949 41.359 89.17 41.528L90.301 42.36C90.418 42.451 90.574 42.451 90.691 42.36C91.601 41.632 92.485 40.631 93.2 39.604C93.265 39.513 93.369 39.461 93.473 39.461H95.982C96.242 39.461 96.372 39.63 96.281 39.864C96.021 40.657 95.501 41.749 94.864 42.49C93.967 43.556 92.836 44.609 90.912 45.441C90.613 45.571 90.574 45.792 90.821 46L91.991 47.027C92.082 47.105 92.225 47.118 92.329 47.066C94.032 46.286 95.54 44.96 96.593 43.595C97.633 42.217 98.27 40.644 98.647 39.617C98.751 39.344 98.868 39.084 98.985 38.863C99.063 38.707 99.037 38.538 98.894 38.434L98.478 38.135C98.231 37.953 98.257 37.758 98.543 37.641L98.686 37.576C98.881 37.498 98.946 37.316 98.855 37.134Z" />
                    </g>
                  </svg>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/" passHref>
                <div>
                  <svg
                    className={styles.svgLogo}
                    width="65"
                    height="82"
                    viewBox="0 0 65 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M6.60052 25.4842C6.67677 28.7537 7.39686 31.9762 8.7194 34.9678C10.0095 34.1784 10.9638 33.7729 11.5704 33.5149C11.7722 33.4293 11.9354 33.3599 12.06 33.2981C12.3222 33.168 12.4642 32.9861 12.576 32.8427C12.6772 32.7132 12.7536 32.6153 12.8719 32.6155C13.1211 32.6163 15.8027 31.7524 17.4257 30.6986C18.0176 30.3144 18.5826 30.1378 19.1713 29.9539C20.197 29.6335 21.2944 29.2907 22.7301 27.7875C23.1786 27.3179 22.6701 27.0605 22.3651 26.906C22.1991 26.822 22.0933 26.7684 22.2346 26.7278C22.5545 26.6358 23.0877 26.6549 23.7349 26.6781C24.9243 26.7207 26.4993 26.777 27.8438 26.1835C29.0359 25.6572 29.803 25.2258 30.5193 24.8231C31.6017 24.2144 32.5674 23.6714 34.7066 22.9656C36.5838 22.9219 34.241 21.7262 32.9049 21.0444V21.0442H32.9048C32.4502 20.8122 32.1122 20.6398 32.0965 20.5923C32.0817 20.5471 32.4164 20.6632 32.9379 20.8441C34.5717 21.4111 38.038 22.6136 38.3245 21.4818C38.5842 20.4565 37.9018 20.133 37.3885 19.8898C37.1543 19.7788 36.9553 19.6843 36.8971 19.5476C36.8279 19.3849 37.2947 19.4921 37.9916 19.6519C39.1641 19.9209 40.9878 20.3392 42.0052 19.8736C43.6273 19.1311 54.3124 14.8399 54.3124 14.8399C52.9899 11.8483 51.0905 9.14636 48.7231 6.88842C46.3555 4.63035 43.566 2.86036 40.514 1.67961C37.4619 0.498816 34.2069 -0.0696994 30.9351 0.00652055C27.6631 0.0827405 24.4382 0.802201 21.4445 2.12383C18.4508 3.4455 15.747 5.34334 13.4873 7.70918C11.2277 10.075 9.45643 12.8624 8.27481 15.9122C7.0932 18.9621 6.52426 22.2146 6.60052 25.4842ZM15.9184 47.7697C15.5231 47.4422 15.1386 47.103 14.7652 46.7527C15.692 46.6631 16.4655 44.2661 16.4545 43.4704C16.4413 42.5252 17.1453 41.5422 17.1453 41.5422C18.0782 40.6541 18.3308 41.499 18.5239 42.1447C18.6413 42.537 18.7366 42.8558 18.949 42.6682C19.1186 42.5185 19.3739 42.0522 19.6803 41.4927C20.3903 40.196 21.3744 38.3989 22.1999 38.8796C23.0357 39.3664 22.9428 41.1516 22.8983 42.006C22.8798 42.3596 22.8697 42.5539 22.9373 42.4305C23.1228 42.0915 23.3078 40.8576 23.5077 39.5253C23.7663 37.802 24.0494 35.9143 24.39 35.5861C25.8103 34.2178 26.6523 38.5439 27.2419 41.5729C27.5083 42.9412 27.7232 44.0449 27.9165 44.2392C28.0834 44.4069 28.1533 43.931 28.2601 43.2026C28.5512 41.219 29.1171 37.3624 32.6653 39.5211C35.9916 41.5446 36.1699 38.2217 36.2948 35.8933C36.3521 34.8259 36.3982 33.9675 36.7312 33.9294C36.8296 33.9173 36.9751 33.8158 37.1488 33.6945C37.8559 33.2008 39.032 32.3798 39.4142 35.9292C39.8904 40.3512 42.3158 33.9453 41.2859 31.7009C40.256 29.4567 40.5599 25.8212 40.7425 25.6602C40.9021 25.5194 41.1644 25.2702 41.4781 24.9721L41.4789 24.9715V24.9714C42.7118 23.8001 44.737 21.8761 44.4363 22.818C44.2462 23.4136 44.4633 23.2169 44.805 22.9074C45.1416 22.6028 45.5989 22.1886 45.9077 22.3129C46.2128 22.4359 46.3231 22.6183 46.4296 22.7944C46.5403 22.9775 46.6469 23.1538 46.9642 23.25C47.212 23.1726 47.8616 22.4128 48.5197 21.643C49.1978 20.8496 49.885 20.0458 50.1512 19.9669C50.9996 19.7156 51.297 20.3032 51.451 20.6075C51.5072 20.7183 51.5442 20.7915 51.582 20.7727C51.7309 20.6988 51.964 20.1738 52.2505 19.5284C52.6248 18.6852 53.0903 17.6368 53.5783 17.1212L53.8643 16.9702C55.3926 19.8622 56.3357 23.0268 56.6401 26.2831C56.9444 29.5393 56.604 32.8236 55.6381 35.9484C54.6723 39.0731 53.0999 41.9772 51.0109 44.4949C48.9219 47.0123 46.3571 49.0941 43.4629 50.6212C40.5689 52.1482 37.4021 53.0907 34.1434 53.3949C30.8847 53.6991 27.5981 53.3588 24.471 52.3936C21.344 51.4284 18.4377 49.8573 15.9184 47.7697ZM53.8118 16.919C53.7336 16.9711 53.6556 17.0395 53.5783 17.1212L31.8259 28.5988L9.7875 40.2273C11.0759 42.6655 12.7589 44.8699 14.7652 46.7527C14.7592 46.7533 14.7531 46.7538 14.747 46.7542C14.7217 46.7558 14.5503 46.6333 14.4362 46.5042C14.4139 46.4804 14.3892 46.46 14.3626 46.438C14.3109 46.3954 14.2517 46.3467 14.1876 46.2544C14.171 46.2304 14.1487 46.2157 14.1238 46.1993C14.0846 46.1734 14.0392 46.1435 14.0013 46.0671C13.2212 45.3412 12.9661 49.1155 12.7541 52.2538C12.6144 54.3209 12.4934 56.1121 12.2532 56.1595C11.8717 56.2968 11.9216 55.2826 11.9976 53.7333C12.0584 52.4956 12.1359 50.9165 12.0236 49.3102C11.7728 45.7176 10.4964 41.6171 9.73492 40.1761L31.7734 28.5476L53.8118 16.919ZM6.68338 39.5421L58.3872 13.4036L58.556 13.7371L6.85222 39.8757L6.68338 39.5421ZM10.97 26.7177C11.2001 26.8535 11.5065 26.9767 11.8916 27.0145C12.0054 27.0256 12.0925 27.1274 12.0748 27.2404C12.0613 27.3275 11.989 27.3933 11.9015 27.4047C11.5783 27.4469 11.0756 27.5605 10.5766 27.6851C10.0737 27.8108 9.68208 27.2181 10.0059 26.8132C10.2251 26.5394 10.6678 26.5394 10.97 26.7177ZM17.8628 24.3679C17.9808 24.4454 18.1351 24.3486 18.1172 24.2085C18.1106 24.157 18.081 24.112 18.0361 24.0856C17.7444 23.914 16.5756 23.2067 15.011 21.9974C13.7159 20.9966 12.9062 20.2366 12.549 19.8837C12.4252 19.7614 12.2295 19.7441 12.0893 19.8472C11.9063 19.9817 11.9031 20.2535 12.0841 20.3909C12.6561 20.8257 13.7975 21.6812 14.6734 22.2634C15.6209 22.8931 17.2054 23.9357 17.8628 24.3679ZM19.1364 26.0592C19.172 26.1186 19.1217 26.1926 19.0533 26.1809C18.6722 26.1158 17.7536 25.9586 17.2031 25.8618C16.9224 25.8124 16.3582 25.8251 15.7794 25.8583C15.4112 25.8795 15.2605 25.3561 15.5889 25.1884C15.6969 25.1332 15.8272 25.1403 15.9353 25.1954C16.1537 25.3068 16.591 25.4976 17.3027 25.6757C18.2452 25.9119 18.9106 26 19.0756 26.0198C19.101 26.0228 19.1232 26.0372 19.1364 26.0592ZM17.3553 47.6221C17.8979 45.902 18.4937 43.7535 18.3307 43.0595C18.3197 43.0128 18.3111 42.9678 18.3115 42.9199C18.315 42.4919 18.4963 42.4768 18.5156 42.9044C18.594 44.6299 18.6009 47.0486 18.6011 47.8502C18.6011 48.0224 18.5283 48.186 18.401 48.3021C17.9266 48.7346 17.162 48.2343 17.3553 47.6221Z" />
                      <path d="M1.83933 75.1299V72.0517H9.16837C9.52673 72.0517 9.85242 71.9622 10.1456 71.783C10.4387 71.6038 10.6749 71.3677 10.8541 71.0745C11.0332 70.7651 11.1228 70.4312 11.1228 70.0729C11.1228 69.6983 11.0332 69.3644 10.8541 69.0712C10.6749 68.7618 10.4387 68.5175 10.1456 68.3384C9.85242 68.1592 9.52673 68.0696 9.16837 68.0696H6.31005C5.34914 68.0696 4.47779 67.8742 3.69602 67.4833C2.91426 67.0924 2.28721 66.5305 1.8149 65.7976C1.35887 65.0484 1.13086 64.1526 1.13086 63.1103C1.13086 62.0842 1.35073 61.1966 1.79047 60.4474C2.23021 59.6819 2.82468 59.0874 3.57388 58.664C4.32307 58.2405 5.15369 58.0288 6.06575 58.0288H13.4925V61.107H6.40777C6.08204 61.107 5.78073 61.1966 5.50386 61.3757C5.22698 61.5386 5.00711 61.7585 4.84424 62.0354C4.69766 62.3123 4.62437 62.6217 4.62437 62.9637C4.62437 63.3057 4.69766 63.6152 4.84424 63.8921C5.00711 64.1689 5.22698 64.3888 5.50386 64.5517C5.78073 64.7145 6.08204 64.796 6.40777 64.796H9.3638C10.4225 64.796 11.3427 64.9996 12.1244 65.4067C12.9062 65.8139 13.5088 66.3839 13.9322 67.1168C14.372 67.8498 14.5919 68.7048 14.5919 69.682C14.5919 70.8384 14.3639 71.8237 13.9079 72.638C13.4681 73.4524 12.8655 74.0713 12.1 74.4948C11.3508 74.9182 10.5202 75.1299 9.60811 75.1299H1.83933ZM21.5295 75.1299C20.5848 75.1299 19.7216 74.9019 18.9399 74.4459C18.1744 73.9898 17.5636 73.3791 17.1076 72.6136C16.6516 71.8318 16.4235 70.9686 16.4235 70.024C16.4235 69.34 16.5702 68.6966 16.8633 68.0941C17.1565 67.4914 17.5555 66.9621 18.0604 66.506C17.5555 66.05 17.1565 65.5207 16.8633 64.9181C16.5702 64.3155 16.4235 63.6804 16.4235 63.0126C16.4235 62.0842 16.6435 61.2454 17.0832 60.4962C17.5392 59.7471 18.1418 59.1526 18.891 58.7129C19.6565 58.2568 20.4953 58.0288 21.4073 58.0288H28.4432V61.107H21.7982C21.4562 61.107 21.1386 61.1966 20.8454 61.3757C20.5685 61.5386 20.3405 61.7667 20.1614 62.0598C19.9985 62.3367 19.9171 62.6542 19.9171 63.0126C19.9171 63.3546 19.9985 63.6722 20.1614 63.9654C20.3405 64.2423 20.5685 64.4702 20.8454 64.6494C21.1386 64.8123 21.4562 64.8937 21.7982 64.8937H27.6126V67.9719H21.9448C21.5702 67.9719 21.2282 68.0696 20.9187 68.265C20.6093 68.4442 20.365 68.6885 20.1858 68.9979C20.0066 69.3074 19.9171 69.6494 19.9171 70.024C19.9171 70.3986 20.0066 70.7406 20.1858 71.0501C20.365 71.3595 20.6093 71.6038 20.9187 71.783C21.2282 71.9622 21.5702 72.0517 21.9448 72.0517H28.4432V75.1299H21.5295ZM30.4041 70.3904V67.3367H37.3179V70.3904H30.4041ZM42.4062 75.1299C41.7547 75.1299 41.1847 74.9915 40.6961 74.7146C40.2075 74.4215 39.8247 74.0387 39.5479 73.5664C39.2873 73.0941 39.157 72.5648 39.157 71.9785C39.157 71.4247 39.2954 70.8873 39.5723 70.366C39.8654 69.8448 40.2401 69.4214 40.6961 69.0957L45.9485 65.3335C46.3069 65.0729 46.5756 64.7634 46.7547 64.4051C46.934 64.0467 47.0235 63.6722 47.0235 63.2813C47.0235 62.8253 46.9258 62.4425 46.7304 62.1331C46.5349 61.8073 46.258 61.5549 45.8997 61.3757C45.5414 61.1966 45.1098 61.107 44.6049 61.107H40.0854V58.0288H45.0203C46.1441 58.0288 47.1131 58.2649 47.9274 58.7373C48.7417 59.2096 49.3688 59.8448 49.8085 60.6429C50.2646 61.4246 50.4926 62.3041 50.4926 63.2813C50.4926 64.2585 50.2972 65.1217 49.9063 65.8709C49.5316 66.6038 48.9128 67.2634 48.0496 67.8498L42.7971 71.4166C42.7645 71.4329 42.7238 71.4735 42.6749 71.5387C42.626 71.5875 42.6016 71.6527 42.6016 71.7342C42.6016 71.8481 42.6342 71.9296 42.6994 71.9785C42.7645 72.0273 42.8541 72.0517 42.9681 72.0517H51.0056V75.1299H42.4062ZM53.4626 75.1299L60.6206 61.8643C60.7021 61.7015 60.7428 61.563 60.7428 61.4491C60.7428 61.3513 60.7102 61.2698 60.6451 61.2048C60.5799 61.1396 60.4904 61.107 60.3763 61.107H52.5831V58.0288H60.816C61.4512 58.0288 62.0213 58.1754 62.5262 58.4686C63.0473 58.7617 63.4627 59.1526 63.7721 59.6412C64.0816 60.1135 64.2363 60.651 64.2363 61.2535C64.2363 61.5793 64.1956 61.9051 64.1141 62.2308C64.0327 62.5403 63.9268 62.8334 63.7966 63.1103L57.4203 75.1299H53.4626Z" />
                    </g>
                    <defs></defs>
                  </svg>
                </div>
              </Link>
            </>
          )}
        </div>
        <div className={styles.headerItem}>
          <ul className={styles.pcMenu}>
            <li>
              <Link href="http://localhost:3000/#services" passHref>
                <a className={styles.menuItem}>Services</a>
              </Link>
            </li>

            <li>
              <Link href="/flow" passHref>
                <a className={styles.menuItem}>Flow/Q&A</a>
              </Link>
            </li>

            <li>
              <Link href="/jamstack" passHref>
                <a className={styles.menuItem}>What&apos;s Jamstack?</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <a className={styles.menuItem}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a>
                  <div className={styles.contactBtn}>Contact</div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* ドロワーメニュー本体 */}
      <div
        className={`${styles.drawerMenu}`}
        ref={spMenuContent}
        style={{ display: "none", opacity: 0 }}
      >
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <a>
                <p className={styles.menuText}>Top</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="http://localhost:3000/#services">
              <a>
                <p className={styles.menuText}>Services</p>
              </a>
            </Link>
          </li>
          <li onClick={toggle}>
            <Link href="/flow">
              <a>
                <p className={styles.menuText}>Flow/Q&A</p>
              </a>
            </Link>
          </li>
          <li onClick={toggle}>
            <Link href="/jamstack">
              <a>
                <p className={styles.menuText}>What&apos;s Jamstack?</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a target="_blank" rel="noopener">
                <p className={styles.menuText}>Blog</p>
              </a>
            </Link>
          </li>

          <li onClick={toggle}>
            <Link href="/contact">
              <a>
                <p className={styles.menuText}>Contact</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
