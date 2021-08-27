import * as React from 'react';
import Svg, {
  Path,
  G,
  Defs,
  Rect,
  ClipPath,
  Stop,
  LinearGradient,
} from 'react-native-svg';

export function BackSvg(props) {
  return (
    <Svg
      width={11}
      height={19}
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.5 2L2 9.5 9.5 17"
        stroke={props.color ? props.color : '#172356'}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function FacebookSvg(props) {
  return (
    <Svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M39 28.7004C39 35.1531 35.1532 39 28.7005 39H26.5909C25.6159 39 24.8182 38.2022 24.8182 37.2272V26.9986C24.8182 26.52 25.2082 26.1122 25.6868 26.1122L28.8068 26.0591C29.055 26.0413 29.2677 25.8641 29.3209 25.6159L29.9414 22.23C29.9946 21.9109 29.7464 21.6095 29.4095 21.6095L25.6336 21.6627C25.1373 21.6627 24.7473 21.2727 24.7296 20.7941L24.6586 16.4509C24.6586 16.1672 24.8891 15.9191 25.1904 15.9191L29.445 15.8481C29.7463 15.8481 29.9768 15.6177 29.9768 15.3163L29.9059 11.0618C29.9059 10.7604 29.6755 10.53 29.3741 10.53L24.5877 10.6009C21.645 10.6541 19.305 13.065 19.3582 16.0077L19.4468 20.8827C19.4646 21.379 19.0746 21.7691 18.5782 21.7868L16.4509 21.8222C16.1495 21.8222 15.9191 22.0527 15.9191 22.354L15.9723 25.7222C15.9723 26.0236 16.2027 26.254 16.5041 26.254L18.6314 26.2186C19.1277 26.2186 19.5177 26.6086 19.5354 27.0872L19.695 37.1918C19.7127 38.1845 18.915 39 17.9222 39H13.845C7.39227 39 3.54546 35.1531 3.54546 28.6827V13.845C3.54546 7.39222 7.39227 3.54541 13.845 3.54541H28.7005C35.1532 3.54541 39 7.39222 39 13.845V28.7004Z"
        fill="#4267B2"
      />
    </Svg>
  );
}

export function LoveSvg(props) {
  return (
    <Svg
      width="65"
      height="58"
      viewBox="0 0 65 58"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.6945 57.8203C19.6945 57.8203 52.8324 51.1702 61.1732 36.5174C66.5835 26.9367 65.0055 17.4688 53.9595 11.8331C42.9136 6.08469 34.6855 14.6509 34.6855 14.6509C34.6855 14.6509 33.3329 2.816 21.1598 0.449008C8.98675 -1.80527 1.77307 4.61941 0.195082 15.4399C-2.28462 32.2343 19.6945 57.8203 19.6945 57.8203Z"
        fill="#f00"
      />
      <Path
        d="M34.5728 14.6509C34.5728 14.6509 33.3329 2.816 21.1598 0.449008C8.98675 -1.80527 1.77307 4.61941 0.195082 15.4399C-2.28462 32.2343 19.6945 57.8203 19.6945 57.8203L34.5728 14.6509Z"
        fill="#f00"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="-2.28317"
          y1="21.2236"
          x2="59.5053"
          y2="42.5672"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#8C3141" />
          <Stop offset="1" stop-color="#FA5672" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="4.38919"
          y1="30.7461"
          x2="29.4311"
          y2="27.2246"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#BB4156" />
          <Stop offset="1" stop-color="#FA5672" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export function CoupleSvg(props) {
  return (
    <Svg
      width="183"
      height="365"
      viewBox="0 0 183 365"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clip-path="url(#clip0)">
        <Path
          opacity="0.45"
          d="M107.539 48.0209C107.539 47.9211 103.948 16.6725 132.079 3.89347C146.245 -2.39619 162.904 -0.898649 176.272 6.98839C198.119 20.0669 214.779 46.6232 200.912 89.1533C189.34 124.595 165.398 161.035 149.537 182.899C140.559 195.179 123.7 198.474 110.432 190.786C87.3877 177.308 51.7742 152.449 22.7446 114.112C9.27733 96.3415 0.299118 74.1779 -0.000152588 51.8147C-0.498947 20.8656 21.4478 -1.09832 53.1708 1.89676C71.1272 3.49413 90.3805 10.6823 107.539 48.0209Z"
          fill="#fff"
        />
        <Path
          d="M96.7654 364.9C58.8052 364.9 28.0323 360.341 28.0323 354.717C28.0323 349.093 58.8052 344.534 96.7654 344.534C134.726 344.534 165.499 349.093 165.499 354.717C165.499 360.341 134.726 364.9 96.7654 364.9Z"
          fill="#F2CBC2"
        />
        <Path
          d="M120.807 89.2535H136.768L134.773 67.3895H120.807V89.2535Z"
          fill="#FFC7A8"
        />
        <Path
          d="M101.853 132.083H152.131V211.353H101.853V132.083Z"
          fill="#7C654E"
        />
        <Path
          d="M109.534 328.261L110.332 310.091L98.8601 309.292L97.663 328.261C97.7627 328.261 103.05 338.244 109.534 328.261Z"
          fill="#EFB69A"
        />
        <Path
          d="M97.7623 325.665H109.633V332.654H97.7623V325.665Z"
          fill="#4E4F56"
        />
        <Path
          d="M112.128 332.553C112.527 333.552 112.527 334.65 112.527 335.748C112.527 337.845 112.527 339.841 112.527 341.938C112.527 343.136 112.527 344.434 111.728 345.432C110.831 346.53 109.334 346.83 107.938 346.73C106.541 346.63 105.244 346.131 103.848 346.131C101.354 346.031 99.0592 347.03 96.9643 348.228C94.8694 349.426 92.8742 350.923 90.5798 351.822C88.1856 352.72 85.5919 352.92 83.098 353.02C80.9033 353.12 78.6089 353.219 76.6137 352.221C76.1149 352.021 75.7159 351.722 75.3169 351.323C74.9178 350.823 74.6185 350.224 74.5188 349.625C73.621 346.131 75.9154 342.138 79.3072 341.139C80.604 340.74 82.0006 340.74 83.2975 340.54C87.8863 339.642 91.2781 335.948 94.2709 332.454C95.2684 331.355 96.4655 330.058 97.8621 330.257C98.5604 330.357 99.159 330.756 99.7575 331.156C101.852 332.354 104.346 332.753 106.641 332.254C108.836 331.655 110.93 329.459 112.128 332.553Z"
          fill="#404148"
        />
        <Path
          d="M90.181 313.086C90.181 313.086 100.456 322.271 115.719 317.479C115.719 310.69 126.892 167.226 126.892 167.226L84.3951 162.433L88.8842 259.374C88.9839 259.474 91.0788 301.205 90.181 313.086Z"
          fill="#404148"
        />
        <Path
          d="M89.0836 288.426C89.0836 288.426 107.339 296.613 118.013 290.922C115.819 317.578 115.819 317.578 115.819 317.578C115.819 317.578 102.451 323.868 90.2807 313.185C90.3805 301.305 89.0836 288.426 89.0836 288.426Z"
          fill="#4E4F56"
        />
        <Path
          d="M148.14 329.958L148.939 311.788L137.466 310.989L136.269 329.958C136.369 329.958 141.656 339.941 148.14 329.958Z"
          fill="#EFB69A"
        />
        <Path
          d="M136.369 327.362H148.24V334.351H136.369V327.362Z"
          fill="#4E4F56"
        />
        <Path
          d="M149.238 341.838C150.335 345.133 151.233 348.627 151.233 352.022C151.233 354.118 150.834 356.314 149.438 357.812C147.642 359.609 144.749 359.809 142.155 359.809C139.262 359.809 136.269 359.809 133.376 359.909C132.578 359.909 131.88 359.909 131.182 359.509C130.384 359.11 129.985 358.211 129.586 357.413C128.788 355.116 128.688 352.521 129.486 350.224C130.683 346.63 133.776 343.835 134.873 340.241C135.172 339.243 135.372 338.144 135.471 337.046C135.571 336.247 135.671 335.449 135.87 334.65C135.97 333.951 135.771 333.352 135.87 332.653C135.87 332.354 135.97 332.054 136.17 331.855C136.469 331.555 136.968 331.455 137.367 331.555C137.965 331.755 138.464 332.054 139.063 332.354C140.36 332.953 141.956 332.853 143.352 332.753C143.851 332.753 144.35 332.653 144.849 332.554C145.447 332.354 145.946 332.154 146.545 331.955C147.143 331.855 147.742 331.855 148.24 332.154C148.34 332.254 148.44 332.354 148.54 332.554C148.639 332.653 148.639 332.853 148.54 332.953C148.54 333.652 148.24 334.251 148.041 334.95C147.941 335.748 147.941 336.547 148.041 337.246C148.34 338.943 148.839 340.341 149.238 341.838Z"
          fill="#404148"
        />
        <Path
          d="M154.725 313.385C154.725 313.385 144.45 322.57 129.187 317.778C129.187 310.989 121.306 165.428 121.306 165.428L160.411 162.733L155.922 259.673C156.021 259.673 153.827 301.405 154.725 313.385Z"
          fill="#404148"
        />
        <Path
          d="M155.922 288.626C155.922 288.626 137.666 296.812 126.992 291.121C129.187 317.678 129.187 317.678 129.187 317.678C129.187 317.678 142.554 323.967 154.725 313.285C154.525 301.604 155.922 288.626 155.922 288.626Z"
          fill="#4E4F56"
        />
        <Path
          d="M137.067 77.8722C131.082 81.3665 123.8 81.4663 117.714 78.2716H117.615L114.821 175.013C123.101 178.107 132.179 178.107 140.459 175.013L137.067 77.8722Z"
          fill="#FFFFFE"
        />
        <Path
          d="M134.174 79.9685C133.176 80.5676 132.079 81.0667 130.982 81.3662C129.884 81.6657 128.787 81.9653 127.59 81.9653C126.992 81.9653 126.493 81.9653 125.894 81.9653L124.996 81.8654C124.697 81.7656 124.398 81.7656 124.099 81.6657C123.5 81.5659 123.001 81.3662 122.403 81.2664C121.804 81.0667 121.305 80.8671 120.707 80.7672C121.206 81.1666 121.704 81.4661 122.203 81.7656C122.802 81.9653 123.3 82.3646 123.899 82.4644C125.096 82.8638 126.293 82.9636 127.59 82.9636C128.787 82.9636 130.084 82.6641 131.181 82.0651C132.378 81.6657 133.376 80.8671 134.174 79.9685Z"
          fill="#E2E2DC"
        />
        <Path
          d="M126.992 75.3765C118.562 75.3765 111.729 66.1687 111.729 54.8103C111.729 43.4519 118.562 34.2441 126.992 34.2441C135.421 34.2441 142.255 43.4519 142.255 54.8103C142.255 66.1687 135.421 75.3765 126.992 75.3765Z"
          fill="#FFC7A8"
        />
        <Path
          d="M140.459 59.2027C140.26 61.9981 141.357 64.3941 142.953 64.494C144.549 64.5938 145.946 62.3974 146.245 59.602C146.445 56.8066 145.347 54.4105 143.751 54.3107C142.155 54.2109 140.758 56.4073 140.459 59.2027Z"
          fill="#FFC7A8"
        />
        <Path
          d="M105.644 39.9346C106.342 41.2324 108.237 41.3323 109.434 40.6334C110.731 39.9346 111.529 38.6367 112.427 37.5385C115.021 34.5434 118.612 32.5467 122.303 31.149C125.595 29.8511 129.186 29.0524 132.578 30.1506C135.77 30.55 138.464 32.6465 140.559 35.0426C140.858 35.3421 141.556 35.5418 141.856 35.7414C142.354 36.041 142.853 36.2406 143.252 36.5401C144.15 37.0393 144.948 37.7382 145.646 38.437C149.836 43.1293 147.642 49.6186 146.444 54.9099L145.746 55.9083C145.048 54.7103 143.951 53.9116 142.853 54.6104C142.055 55.1096 141.656 56.108 141.556 57.1063C141.357 58.3044 141.357 59.6022 141.556 60.8003C140.858 60.8003 140.16 60.8003 139.461 60.8003C139.162 59.2029 138.963 57.6055 138.663 56.0081C138.564 55.3093 138.364 54.5106 138.065 53.9116C137.566 52.9132 136.568 52.3142 135.77 51.5155C133.077 49.1195 130.982 45.126 131.481 41.5319C130.783 45.2259 127.79 48.1211 124.298 49.6186C120.906 51.1162 117.016 51.3158 113.325 51.3158C111.928 51.3158 110.332 51.1162 109.734 49.9181C110.432 50.018 111.23 49.9181 111.828 49.6186C109.734 49.419 107.838 47.4222 107.738 45.3257C108.536 45.9247 109.634 46.1244 110.631 46.0245C109.335 45.4255 108.038 44.7267 107.14 43.7283C106.043 42.73 105.344 41.2324 105.644 39.9346Z"
          fill="#51443F"
        />
        <Path
          d="M137.067 77.8722C137.067 77.8722 157.019 164.13 160.211 197.376C161.209 196.377 162.106 195.279 163.004 194.281C166.296 190.287 168.99 186.294 171.184 182.201C176.272 172.916 178.666 163.432 180.063 154.446C179.564 133.381 166.895 93.3468 164.002 88.8542C160.81 85.1602 137.067 77.8722 137.067 77.8722Z"
          fill="#4E4F56"
        />
        <Path
          d="M156.021 106.325L163.004 194.281C166.296 190.287 168.99 186.294 171.184 182.201L156.021 106.325Z"
          fill="#46474F"
        />
        <Path
          d="M156.021 94.445L169.788 196.377C161.009 200.171 151.333 202.368 141.457 202.767L136.369 202.967L137.067 77.8722L156.021 94.445Z"
          fill="#4E4F56"
        />
        <Path
          d="M73.5217 154.447C75.2176 165.229 77.6118 178.607 84.4951 190.587C85.8917 193.083 87.4878 195.479 89.2835 197.775C89.7823 198.474 90.3808 199.073 90.9794 199.772C91.3784 200.271 91.8772 200.77 92.2762 201.27C95.4685 168.024 117.515 78.2718 117.515 78.2718C117.515 78.2718 96.2665 85.6596 93.0743 89.3536C90.2811 93.8462 74.0205 133.381 73.5217 154.447Z"
          fill="#4E4F56"
        />
        <Path
          d="M84.4949 190.587C85.8915 193.083 87.4876 195.479 89.2832 197.775C89.782 198.474 90.3806 199.073 90.9791 199.772L94.2711 107.623L84.4949 190.587Z"
          fill="#A89076"
        />
        <Path
          d="M93.6724 94.1454L81.7015 196.178C90.5799 201.07 103.947 202.367 114.721 202.867L117.914 202.966L117.714 78.0718L93.6724 94.1454Z"
          fill="#4E4F56"
        />
        <Path
          d="M139.162 146.559C139.162 147.957 140.259 149.055 141.656 149.055C143.053 149.055 144.15 147.957 144.15 146.559C144.15 145.161 143.053 144.063 141.656 144.063C140.259 144.063 139.162 145.261 139.162 146.559Z"
          fill="#FFFFFE"
        />
        <Path
          d="M139.162 133.481C139.162 134.878 140.259 135.977 141.656 135.977C143.053 135.977 144.15 134.878 144.15 133.481C144.15 132.083 143.053 130.985 141.656 130.985C140.259 130.985 139.162 132.083 139.162 133.481Z"
          fill="#FFFFFE"
        />
        <Path
          d="M139.661 160.536C139.661 161.934 140.758 163.032 142.155 163.032C143.552 163.032 144.649 161.934 144.649 160.536C144.649 159.139 143.552 158.04 142.155 158.04C140.858 158.04 139.661 159.238 139.661 160.536Z"
          fill="#FFFFFE"
        />
        <Path
          d="M151.931 193.083H150.435C146.844 193.083 143.851 190.188 143.851 186.494V173.515L158.415 171.519V186.494C158.515 190.088 155.523 193.083 151.931 193.083Z"
          fill="#46474F"
        />
        <Path
          d="M123.999 58.6035C123.999 58.6035 123.899 62.6967 122.203 64.5936C122.203 64.5936 122.901 65.1926 124.098 65.8915"
          stroke="#E2906D"
          stroke-width="0.653"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M131.88 58.5037C131.78 59.3024 131.281 60.0012 130.683 59.9014C130.084 59.8016 129.685 59.1027 129.785 58.304C129.885 57.5053 130.383 56.8065 130.982 56.9063C131.58 57.0062 131.979 57.705 131.88 58.5037Z"
          fill="#382F2C"
        />
        <Path
          d="M128.488 53.8115C128.488 53.8115 133.177 52.2142 136.07 54.111C136.07 54.111 132.878 51.3156 128.488 53.8115Z"
          stroke="#51443F"
          stroke-width="1.2268"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M124.697 67.9881C123.3 67.9881 122.004 67.8883 121.006 67.6886C121.006 67.8883 120.906 68.1878 121.006 68.3875C121.106 70.484 122.901 72.0814 124.996 72.0814C127.091 71.9816 128.787 70.2844 128.687 68.1878C128.687 67.8883 128.588 67.6886 128.588 67.3891C127.59 67.7885 126.293 67.9881 124.697 67.9881Z"
          fill="white"
        />
        <Path
          d="M129.286 63.3959C129.386 64.5939 130.982 65.3926 132.877 65.2927C134.773 65.1929 136.169 64.0947 136.069 62.8967C135.97 61.6987 134.374 60.9 132.478 60.9998C130.683 61.0996 129.186 62.1978 129.286 63.3959Z"
          fill="#F8B593"
        />
        <Path
          d="M117.913 59.0029C118.013 59.8016 118.512 60.5004 119.111 60.4006C119.709 60.3007 120.108 59.6019 120.008 58.8032C119.909 58.0045 119.41 57.3057 118.811 57.4055C118.213 57.4055 117.814 58.2042 117.913 59.0029Z"
          fill="#382F2C"
        />
        <Path
          d="M121.604 54.0111C121.604 54.0111 116.816 52.9129 114.123 55.1093C114.123 55.1093 117.016 51.9145 121.604 54.0111Z"
          stroke="#51443F"
          stroke-width="1.2253"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M120.408 63.396C120.408 64.3943 119.111 65.2929 117.515 65.3927C115.819 65.4925 114.522 64.6939 114.522 63.5957C114.522 62.5973 115.819 61.6988 117.415 61.5989C119.011 61.4991 120.408 62.2978 120.408 63.396Z"
          fill="#F8B593"
        />
        <Path
          d="M83.8966 73.2798C83.8966 73.2798 85.792 68.7872 78.1106 66.5908C74.5193 65.5924 71.2273 65.0932 67.636 66.3911C55.7649 70.684 48.4825 81.1668 44.3925 92.5481C40.9009 102.232 35.7135 110.219 34.4167 120.402C33.3193 128.589 39.3048 134.18 42.5968 131.883C47.2854 128.589 48.0835 117.507 59.1566 115.111C70.2297 112.715 65.6409 115.111 70.8283 117.108C75.9159 119.104 92.4757 112.016 90.9794 89.4532C89.5828 69.5858 83.8966 73.2798 83.8966 73.2798Z"
          fill="#51443F"
        />
        <Path
          d="M62.0498 101.533C62.0498 104.928 67.4367 107.723 74.0207 107.723C80.3054 107.723 85.1936 104.429 85.6924 101.234C85.5926 101.234 85.4928 101.234 85.3931 101.334C84.595 101.434 84.0962 102.432 83.2982 102.532C79.9064 103.031 76.6144 103.231 73.1229 103.331C71.5267 103.331 69.9306 103.43 68.4343 103.131C66.5389 102.732 65.7408 101.733 64.5437 100.435C64.4439 100.236 64.2444 100.136 64.0449 100.036C63.6459 99.8363 63.2468 99.9361 62.8478 100.136C62.7481 100.136 62.6483 100.236 62.5485 100.236C62.2493 100.535 62.0498 101.034 62.0498 101.533Z"
          fill="#443734"
        />
        <Path
          opacity="0.47"
          d="M79.607 75.3763C76.9136 77.7724 73.3223 78.6709 69.9305 80.0686C65.6409 81.8657 61.4511 84.5612 59.5557 88.8542"
          stroke="#35241E"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          opacity="0.47"
          d="M74.4198 75.0768C72.7239 76.9737 70.0304 77.373 67.6363 78.1717C65.4416 78.7707 63.4464 79.7691 61.3515 80.7675C58.259 82.265 55.1665 84.062 52.7723 86.5579C50.3781 89.0538 48.6822 92.4483 48.8818 95.9425"
          stroke="#35241E"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          opacity="0.47"
          d="M64.5434 70.5842C63.1468 73.4794 60.3536 75.576 57.5604 77.2732"
          stroke="#35241E"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M39.2049 202.767C39.2049 202.767 51.6747 180.004 54.0689 178.706L54.6674 181.302C54.6674 181.302 45.1904 195.079 41.2998 203.965"
          fill="#7E4D3D"
        />
        <Path
          d="M58.0591 187.292C58.0591 188.391 58.6577 189.489 59.755 189.888C65.6407 192.084 85.3928 198.374 102.651 191.386C105.444 190.287 107.34 187.592 107.439 184.597C108.337 170.22 109.335 126.991 90.0814 114.312C89.7821 114.113 89.4829 113.913 89.1836 113.713C89.0838 113.613 86.0911 112.316 84.0959 111.417C82.8988 110.918 81.7017 110.718 80.4049 110.718C74.0204 111.118 75.018 110.818 70.7284 110.618C68.6335 110.519 61.0519 113.514 61.0519 113.514V113.314L60.7526 119.204L60.6528 121.401L58.2586 182.7L58.1589 184.397L58.0591 187.292Z"
          fill="#46474F"
        />
        <Path
          d="M52.6724 319.675C52.6724 319.675 45.7891 333.452 41.8985 341.139C41.699 341.639 41.699 342.138 41.8985 342.637C42.7963 344.534 45.2903 349.625 46.8864 351.622C45.6893 351.223 30.5261 346.93 33.6186 342.337C36.2123 338.444 38.1077 327.262 41.699 315.881"
          fill="#EDBB94"
        />
        <Path
          d="M34.6161 339.742C34.8157 339.642 35.1149 339.642 35.3144 339.841C36.0127 340.94 37.7086 341.838 38.5067 342.038C40.0031 342.537 41.4994 341.938 42.098 342.337C42.5968 342.737 46.3876 350.624 49.5798 353.219C51.974 355.216 50.2781 356.714 49.9789 356.714C41.2002 358.71 40.0031 354.218 39.0055 353.12C36.9106 350.823 35.6137 349.426 33.6186 347.229C33.02 346.53 32.0224 345.233 31.8229 344.434C31.4239 342.936 32.9203 340.84 34.6161 339.742Z"
          fill="#FFAB74"
        />
        <Path
          d="M32.1223 342.437C32.1223 342.637 32.1223 342.737 32.1223 342.936C32.3218 343.835 33.3194 345.133 33.918 345.732C35.9131 347.928 37.21 349.326 39.3049 351.622C40.3025 352.72 41.4995 357.313 50.2782 355.216C50.378 355.216 50.4778 355.116 50.6773 354.917C50.9766 356.015 50.0787 356.714 49.8792 356.814C41.1005 358.81 39.9034 354.318 38.9058 353.22C36.8109 350.923 35.5141 349.526 33.5189 347.329C32.9204 346.63 31.9228 345.333 31.7233 344.534C31.6235 343.835 31.7233 343.136 32.1223 342.437Z"
          fill="#FFFFFA"
        />
        <Path
          d="M94.2712 330.357C94.2712 330.357 94.5705 336.347 94.371 346.83C94.371 347.329 94.5705 347.828 94.9695 348.128C96.7652 349.526 101.953 353.419 104.646 354.517C103.15 354.817 85.8916 359.01 86.7894 352.62C87.5875 347.129 86.4901 342.238 83.9962 331.056"
          fill="#EDBB94"
        />
        <Path
          d="M86.5897 349.625C86.6894 349.326 87.0885 349.126 87.3877 349.226C88.5848 349.625 90.3805 349.426 91.2783 349.625C92.3756 349.725 94.3708 347.828 95.0691 347.928C95.8672 348.028 101.254 352.121 104.845 353.319C106.042 353.719 107.24 354.018 108.137 354.817C108.736 355.316 109.235 356.015 109.434 356.813C109.534 357.113 109.634 357.313 109.534 357.612C109.434 358.012 109.135 358.311 108.935 358.511C107.539 359.609 91.8768 358.71 88.6846 358.012C87.1882 357.712 86.2904 357.313 85.6919 356.514C84.6943 355.016 85.7916 352.021 86.5897 349.625Z"
          fill="#FFAB74"
        />
        <Path
          d="M86.5899 349.626C86.6897 349.426 86.7895 349.326 86.8892 349.226C86.1909 351.323 85.4926 353.619 86.4902 354.917C87.0887 355.716 87.9866 356.115 89.4829 356.414C92.5754 357.113 107.739 358.012 109.634 357.013C109.634 357.213 109.734 357.413 109.634 357.612C109.534 358.012 109.235 358.311 109.035 358.511C107.639 359.609 91.9769 358.711 88.7846 358.012C87.2882 357.712 86.3904 357.313 85.7919 356.514C84.6945 355.017 85.7919 352.022 86.5899 349.626Z"
          fill="#FFFFFA"
        />
        <Path
          d="M103.249 214.647C103.948 232.518 94.9693 337.545 94.9693 337.545C94.9693 337.545 93.7722 338.144 91.2783 338.144C87.8865 338.144 84.6943 337.745 84.6943 337.745C84.6943 337.745 78.5093 311.189 79.4071 283.933C79.5069 280.339 79.8062 276.645 80.2052 273.051C80.8037 267.361 80.704 261.57 79.8061 255.88C78.8086 249.49 77.7112 242.302 76.8134 234.814C75.0178 220.238 73.6212 204.564 73.4217 191.585C72.3243 129.587 98.6604 180.404 98.6604 180.404C98.6604 180.404 102.551 196.777 103.249 214.647Z"
          fill="#C3BAA6"
        />
        <Path
          d="M54.8668 186.394C54.8668 186.394 46.9859 202.667 48.9811 220.039C50.3777 231.919 53.6697 245.197 56.1637 253.983C57.66 259.075 57.1612 264.566 54.9666 269.358C46.6867 287.428 36.1123 331.655 36.1123 331.655C36.1123 331.655 42.0978 334.95 47.0857 334.75C47.0857 334.75 70.5288 283.634 74.6189 268.559C82.2005 240.605 83.2978 187.692 83.2978 187.692L54.8668 186.394Z"
          fill="#C3BAA6"
        />
        <Path
          d="M78.4099 249.49C80.5048 235.713 81.7019 220.438 82.4002 208.457"
          stroke="#A59C91"
          stroke-miterlimit="10"
        />
        <Path
          d="M94.7807 350.433C94.7721 349.992 95.0331 349.629 95.3636 349.623C95.6941 349.616 95.9689 349.968 95.9775 350.409C95.9861 350.85 95.7251 351.213 95.3946 351.22C95.0641 351.226 94.7892 350.874 94.7807 350.433Z"
          fill="#F9E0D9"
        />
        <Path
          d="M96.6824 351.553C96.677 351.278 96.8513 351.051 97.0716 351.046C97.2919 351.042 97.4749 351.262 97.4803 351.538C97.4856 351.813 97.3113 352.04 97.091 352.044C96.8707 352.049 96.6877 351.829 96.6824 351.553Z"
          fill="#F9E0D9"
        />
        <Path
          d="M41.6746 345.324C41.3579 345.229 41.2038 344.809 41.3304 344.386C41.457 343.964 41.8163 343.698 42.133 343.793C42.4496 343.888 42.6037 344.308 42.4771 344.73C42.3505 345.153 41.9912 345.419 41.6746 345.324Z"
          fill="#F9E0D9"
        />
        <Path
          d="M42.9526 346.722C42.7415 346.659 42.6345 346.394 42.7136 346.13C42.7927 345.865 43.028 345.703 43.2391 345.766C43.4502 345.829 43.5572 346.095 43.4781 346.359C43.3989 346.623 43.1637 346.786 42.9526 346.722Z"
          fill="#F9E0D9"
        />
        <Path
          d="M82.7989 207.958C79.1078 205.862 74.519 205.263 70.4289 206.461"
          stroke="#A59C91"
          stroke-miterlimit="10"
        />
        <Path
          d="M85.9912 208.158C87.288 206.96 88.7844 205.961 90.2808 205.163"
          stroke="#A59C91"
          stroke-miterlimit="10"
        />
        <Path
          d="M79.3073 192.683C79.5069 195.878 79.7064 199.073 79.9059 202.268C80.0056 203.266 80.0056 204.264 80.4047 205.263C81.0032 206.66 81.6018 206.86 82.7989 207.858C82.4996 202.966 82.5993 198.174 82.3001 193.382"
          stroke="#A59C91"
          stroke-miterlimit="10"
        />
        <Path
          d="M57.9594 194.98C57.9594 194.98 47.385 205.163 60.9521 256.778C63.047 275.747 50.4775 278.942 40.0029 327.362"
          stroke="#A59C91"
          stroke-miterlimit="10"
        />
        <Path
          opacity="0.3"
          d="M96.7651 189.788C96.7651 189.788 95.7675 192.684 88.5849 194.281C81.4024 195.978 60.4532 193.682 56.9617 187.692C53.4702 181.702 89.8818 183.598 96.7651 189.788Z"
          fill="#A89D86"
        />
        <Path
          d="M67.636 112.216C70.3294 113.514 73.6214 114.013 76.7139 113.015C77.3125 112.815 77.8113 112.316 77.8113 111.617L77.911 109.321L78.1105 103.43L68.7333 103.73L67.5362 103.53V103.93L67.1372 106.725L66.6384 110.219C66.5386 111.118 66.9377 111.916 67.636 112.216Z"
          fill="#FFC3A4"
        />
        <Path
          d="M53.5698 185.196C53.4701 186.294 54.1684 187.392 55.2657 187.792C61.2512 189.988 80.9035 196.278 98.1616 189.289C100.955 188.191 102.85 185.495 102.95 182.5C103.848 168.124 104.845 124.895 85.5921 112.216C85.2928 112.016 84.9935 111.816 84.6943 111.717C84.4948 111.617 78.0105 108.721 77.811 108.622C69.2318 109.221 70.8279 108.821 66.1393 108.622C64.1442 108.522 56.4628 111.517 56.4628 111.517V111.317L56.1635 117.208L56.0638 119.404L53.6696 180.703L53.5698 182.4V185.196Z"
          fill="#FFAB74"
        />
        <Path
          d="M60.4532 157.342C60.4532 163.731 58.857 170.121 56.6624 176.211C55.8643 178.407 54.8667 180.404 53.6696 182.301L56.1636 119.304L56.2633 117.108L67.2367 125.095C71.3267 135.378 60.4532 151.252 60.4532 157.342Z"
          fill="#F99E6B"
        />
        <Path
          opacity="0.39"
          d="M100.855 139.77C99.9572 137.774 97.1639 136.975 95.4681 138.273C94.4705 138.972 93.8719 140.17 93.0739 141.168C92.2758 142.067 90.7794 142.865 89.7819 142.166C88.9838 141.667 88.6845 140.669 88.086 139.87C86.9886 138.572 84.9935 138.472 83.3974 139.271C81.901 139.97 80.8037 141.368 79.6066 142.566C79.3073 142.865 79.008 143.265 78.609 143.364C77.4119 143.664 76.7136 142.166 76.0153 141.168C74.8182 139.571 72.2245 139.371 70.7281 140.669C69.93 141.368 69.4312 142.366 68.5334 142.865C67.6356 143.364 66.0395 142.666 66.4385 141.667"
          stroke="#A85D0B"
          stroke-miterlimit="10"
        />
        <Path
          opacity="0.39"
          d="M97.6626 140.37C98.0617 140.969 98.2612 141.668 98.2612 142.466C98.2612 142.866 98.1614 143.265 97.8621 143.465C97.3633 143.864 96.5653 143.564 96.1663 142.965C95.6675 142.267 95.5677 141.168 96.1663 140.569C96.7648 139.97 98.0617 140.17 98.1614 140.969"
          stroke="#A85D0B"
          stroke-miterlimit="10"
        />
        <Path
          opacity="0.39"
          d="M84.4948 142.366C85.1931 142.566 85.7916 143.065 85.8914 143.764C85.9911 144.463 85.3926 145.262 84.6943 145.062C84.1955 144.962 83.7965 144.363 83.8962 143.864C83.8962 143.365 84.1955 142.865 84.5945 142.466"
          stroke="#A85D0B"
          stroke-miterlimit="10"
        />
        <Path
          opacity="0.39"
          d="M90.7794 135.977C91.4777 136.176 92.0762 136.675 92.176 137.374C92.2757 138.073 91.6772 138.872 90.9789 138.672C90.4801 138.572 90.0811 137.973 90.1808 137.474C90.1808 136.975 90.4801 136.476 90.8791 136.076"
          stroke="#A85D0B"
          stroke-miterlimit="10"
        />
        <Path
          opacity="0.39"
          d="M78.0104 136.675C78.7087 136.875 79.3072 137.374 79.407 138.073C79.5067 138.772 78.9082 139.571 78.2099 139.371C77.7111 139.271 77.3121 138.672 77.4118 138.173C77.4118 137.674 77.7111 137.175 78.1101 136.775"
          stroke="#A85D0B"
          stroke-miterlimit="10"
        />
        <Path
          opacity="0.39"
          d="M74.1199 142.765C75.0177 142.765 75.716 143.864 75.317 144.662C75.2173 144.862 75.0177 145.062 74.7185 145.161C74.1199 145.361 73.6211 144.562 73.5214 143.963C73.5214 143.564 73.5214 143.065 73.7209 142.665C73.9204 142.765 74.0202 142.865 74.2197 142.965"
          stroke="#A85D0B"
          stroke-miterlimit="10"
        />
        <Path
          d="M9.4768 196.677C11.7712 196.777 11.1727 196.976 13.6666 194.281C16.7591 193.482 19.1533 195.379 21.348 193.182C21.6473 192.883 22.4453 192.184 23.4429 191.286C25.039 189.888 27.3335 187.891 29.9272 185.595L22.1461 182.4C20.8492 184.297 19.7519 185.695 19.2531 185.595C17.4574 184.996 11.6715 183.598 9.17753 183.798C6.68358 183.998 4.38914 188.59 4.18963 190.587C3.89035 192.783 7.18237 196.577 9.4768 196.677Z"
          fill="#EDBB94"
        />
        <Path
          d="M12.9683 184.996C11.0729 185.295 10.0753 185.395 7.98043 186.893C6.18479 188.19 7.88068 189.788 9.07777 188.789C10.2749 187.791 11.472 188.19 13.2676 189.488C14.0657 189.988 15.6618 191.086 17.1581 190.287"
          stroke="#E69677"
          stroke-width="0.4141"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4.98769 192.384C4.98769 192.384 5.78575 193.083 7.7809 192.983C10.0753 192.883 11.4719 191.086 11.4719 191.086"
          stroke="#E69677"
          stroke-width="0.4141"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.28441 194.48C6.28441 194.48 7.68102 195.678 9.57642 195.079C11.4718 194.48 12.0704 192.384 12.0704 192.384"
          stroke="#E69677"
          stroke-width="0.4141"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.98064 195.978C7.98064 195.978 9.37725 197.176 11.2727 196.577C13.1681 195.978 13.7666 193.881 13.7666 193.881"
          stroke="#E69677"
          stroke-width="0.4141"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M23.4429 191.385C25.039 189.988 27.3335 187.991 29.9272 185.695L22.1461 182.5C20.8492 184.397 19.7519 185.794 19.2531 185.695C19.3528 185.994 19.4526 186.294 19.5524 186.593C20.2507 188.19 21.747 189.988 23.4429 191.385Z"
          fill="#DDAC8A"
        />
        <Path
          d="M19.4527 184.796C20.6498 187.392 24.1413 190.886 26.735 191.285C27.7326 191.485 28.8299 191.285 29.8275 191.086C31.0246 190.786 32.2217 190.387 33.1195 189.588C34.0173 188.789 34.5161 187.491 34.3166 186.194C34.2168 185.495 33.8178 184.896 33.4188 184.297C31.2241 180.802 27.3336 178.307 23.5428 177.608C21.8469 177.308 19.8517 177.308 19.3529 179.205C18.9539 181.002 18.6546 182.999 19.4527 184.796Z"
          fill="white"
        />
        <Path
          d="M33.1194 142.965C48.2826 104.129 64.1441 111.117 64.1441 111.117C64.4434 111.217 65.3412 111.916 65.3412 111.916C67.0371 113.613 66.7378 116.409 66.8376 118.805C66.9374 122.199 68.0347 125.494 68.5335 128.788C68.9325 131.384 69.0323 134.179 68.1345 136.675C66.4386 141.168 63.8449 145.062 60.1538 148.156C59.4555 148.755 58.7572 149.255 58.3582 149.953C57.5601 151.152 57.4604 152.749 57.2608 154.147C56.762 158.04 55.1659 161.734 53.5698 165.328C51.7742 169.322 50.0783 173.315 48.2826 177.309C45.5892 183.498 40.9006 188.091 33.9175 188.69C31.0245 188.889 28.5306 188.989 26.0366 187.292C24.0415 185.994 22.5451 183.898 20.8492 182.4C9.47681 172.017 27.8323 151.152 33.1194 142.965Z"
          fill="#FFAB74"
        />
        <Path
          d="M70.7283 73.1801C79.7065 70.4845 82.3999 73.0802 84.0958 80.7676C85.7917 88.4549 88.2856 97.9394 84.5946 103.031C80.9036 108.123 66.6382 108.622 64.0445 100.236C61.351 91.8494 60.6527 86.0589 59.5554 83.3633C58.3583 80.7676 67.536 74.0786 70.7283 73.1801Z"
          fill="#FFC3A4"
        />
        <Path
          d="M79.6066 89.2534C79.6066 89.2534 79.9058 92.4481 81.3024 93.746C81.3024 93.746 80.8036 94.2451 79.9058 94.8442"
          stroke="#E2906D"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M83.8962 74.378C83.8962 74.378 83.3974 79.3698 77.811 80.3682C72.2245 81.3666 66.4386 85.959 64.7427 88.3551C61.75 92.5482 58.1587 89.8526 58.1587 89.8526C58.1587 89.8526 57.8594 84.5613 57.8594 81.5662C57.8594 78.5711 65.84 71.5826 69.2318 70.784C72.5238 69.7856 83.2977 72.4812 83.8962 74.378Z"
          fill="#51443F"
        />
        <Path
          d="M73.6213 89.2535C73.7211 89.8525 74.2199 90.3517 74.6189 90.2519C75.1177 90.1521 75.3172 89.6529 75.2174 88.954C75.1177 88.355 74.6189 87.8558 74.2198 87.9557C73.721 88.0555 73.5215 88.6545 73.6213 89.2535Z"
          fill="#382F2C"
        />
        <Path
          d="M82.3999 88.1556C82.4996 88.7546 82.9984 89.2538 83.3974 89.1539C83.8962 89.0541 84.0958 88.5549 83.996 87.8561C83.8962 87.257 83.3974 86.7579 82.9984 86.8577C82.5994 86.9575 82.3001 87.4567 82.3999 88.1556Z"
          fill="#382F2C"
        />
        <Path
          d="M75.6165 85.0603C74.9182 84.9604 74.1201 84.9604 73.4218 84.9604C72.1249 85.0603 70.6286 85.26 69.631 86.1585C69.3317 86.458 68.4339 85.9588 68.9327 85.5595C70.1298 84.6609 71.6262 84.3614 73.1225 84.2616C73.9206 84.2616 74.8184 84.2616 75.7162 84.3614C75.9157 84.3614 76.215 84.4613 76.215 84.7608C76.0155 84.9605 75.816 85.0603 75.6165 85.0603Z"
          fill="#51443F"
        />
        <Path
          d="M85.2928 85.1604C85.2928 85.1604 85.1931 85.0605 85.2928 85.1604C85.1931 85.0605 85.1931 85.0605 85.0933 85.0605C84.9936 85.0605 85.1931 85.0605 85.0933 85.0605C85.0933 85.0605 85.0933 85.0605 84.9935 85.0605C84.6943 84.8608 84.4948 84.761 84.0957 84.6612C83.996 84.6612 83.6967 84.5613 83.4972 84.4615C83.2977 84.4615 82.9984 84.3617 82.7989 84.3617C82.1006 84.3617 81.502 84.3617 80.8037 84.5613C80.6042 84.6612 80.3049 84.5613 80.1054 84.4615C80.0057 84.3617 79.8061 84.162 80.0057 84.162C81.4023 83.7627 82.7989 83.8625 84.1955 84.2618C84.794 84.4615 85.3926 84.761 85.8914 85.1604C86.0909 85.2602 85.9911 85.4599 85.7916 85.4599C85.6919 85.36 85.3926 85.2602 85.2928 85.1604Z"
          fill="#51443F"
        />
        <Path
          d="M57.0616 93.4467C56.5628 96.2421 59.0567 99.8362 61.3511 100.236C63.5458 100.635 66.0398 99.7364 65.0422 96.4418C64.2441 93.7462 64.1444 91.0507 61.9497 90.6513C59.6553 90.252 57.5603 90.6513 57.0616 93.4467Z"
          fill="#FFC3A4"
        />
        <Path
          d="M79.5068 96.2419C80.7038 96.2419 81.7014 96.142 82.5992 95.8425C82.5992 96.0422 82.699 96.3417 82.699 96.5414C82.699 98.5381 81.2026 100.135 79.407 100.135C77.6114 100.135 76.115 98.5381 76.115 96.5414C76.115 96.2419 76.115 96.0422 76.2147 95.7427C77.1126 96.0422 78.3097 96.2419 79.5068 96.2419Z"
          fill="white"
        />
        <Path
          d="M75.9154 93.2471C75.9154 94.1456 74.7183 94.8444 73.3217 94.8444C71.9251 94.8444 70.728 94.1456 70.728 93.2471C70.728 92.3485 71.9251 91.6497 73.3217 91.6497C74.7183 91.5499 75.9154 92.3485 75.9154 93.2471Z"
          fill="#F8B593"
        />
        <Path
          d="M82.9984 92.548C82.7989 91.6494 83.7965 90.6511 85.1931 90.3516C85.4924 90.2517 85.7916 90.2517 85.9911 90.2517C86.1907 91.3499 86.2904 92.3483 86.3902 93.3466C86.2904 93.4465 86.0909 93.4465 85.9911 93.4465C84.4948 93.8458 83.1979 93.4465 82.9984 92.548Z"
          fill="#F8B593"
        />
        <Path
          d="M81.6022 110.219C81.6022 110.219 95.3688 113.015 80.5049 151.052C65.5412 189.09 55.0666 210.754 55.0666 210.754C55.0666 210.754 54.069 213.849 56.563 211.353C59.0569 208.857 65.3417 193.982 73.1228 174.713C80.9039 155.545 94.7702 126.892 87.0889 112.715C87.1886 112.615 85.0937 108.422 81.6022 110.219Z"
          fill="#7E4D3D"
        />
        <Path
          d="M45.1909 199.572C45.1909 199.572 56.4635 203.666 57.3613 205.962C58.2591 208.258 53.4708 222.435 50.478 224.631C47.3855 226.728 33.9182 220.138 33.1202 218.641C32.4219 217.143 38.0083 197.476 45.1909 199.572Z"
          fill="#7E4D3D"
        />
        <Path
          d="M38.1077 204.664C38.1077 204.664 39.5043 211.752 40.7014 213.05C41.7988 214.348 53.3707 206.162 54.867 206.361C55.9644 206.561 55.7649 206.261 55.5653 206.162C55.3658 206.062 54.468 205.862 52.5726 206.86C50.6772 207.859 42.098 212.651 41.2002 212.751C40.2026 212.851 38.6065 204.764 38.5068 204.564C38.5068 204.265 38.008 204.165 38.1077 204.664Z"
          fill="#63362A"
        />
        <Path
          d="M157.418 41.4323C157.418 41.4323 157.917 40.434 157.219 39.7351C156.82 39.3358 156.321 39.1361 155.722 39.236C154.825 39.3358 153.927 40.0346 153.927 41.632C153.827 42.9299 154.126 44.4274 154.426 45.3259C154.525 45.8251 155.024 46.1246 155.623 46.1246C156.52 46.0248 158.017 45.6254 159.413 44.7269C160.112 44.3276 160.611 43.7286 160.91 43.0297C161.309 42.0314 160.91 41.033 159.812 40.7335C159.214 40.434 158.416 40.434 157.418 41.4323Z"
          fill="#EF927F"
        />
        <Path
          d="M53.8699 61.3997C53.8699 61.3997 53.1716 60.601 52.174 61.0004C51.6752 61.2001 51.376 61.6992 51.1764 62.1984C50.9769 63.0969 51.2762 64.0953 52.7726 64.7942C53.9697 65.2933 55.466 65.5928 56.3639 65.5928C56.8626 65.6927 57.3614 65.2933 57.4612 64.7942C57.6607 63.8956 57.8602 62.3981 57.5609 60.7009C57.4612 59.9022 57.0622 59.2033 56.4636 58.7042C55.6656 58.0053 54.5682 58.0053 53.9697 58.9038C53.5706 59.403 53.3711 60.1019 53.8699 61.3997Z"
          fill="#EF927F"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="206"
            height="365"
            fill="white"
            transform="matrix(-1 0 0 1 206 0)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
