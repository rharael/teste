import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

// login page icons
const EyeFill = ({ width = 24, height = 24, color = '#7C7C7C' }) => (
	<Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
	  <Path
		d="M1.18201 12C2.12201 6.88 6.60801 3 12 3C17.392 3 21.878 6.88 22.819 12C21.879 17.12 17.392 21 12 21C6.60801 21 2.12201 17.12 1.18201 12ZM12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52679 9.40215 7.00001 10.6739 7.00001 12C7.00001 13.3261 7.52679 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17ZM12 15C11.2044 15 10.4413 14.6839 9.87869 14.1213C9.31608 13.5587 9.00001 12.7956 9.00001 12C9.00001 11.2044 9.31608 10.4413 9.87869 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7957 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15Z"
		fill={color}
	  />
	</Svg>
);

const EyeOff = ({ width = 22, height = 21, color = '#7C7C7C' }) => (
	<Svg width={width} height={height} viewBox="0 0 22 21" fill="none">
	  <Path
		d="M3.338 4.541L0.212 1.414L1.626 0L21.425 19.798L20.011 21.213L16.701 17.903C14.9419 19.0187 12.9011 19.6095 10.818 19.606C5.426 19.606 0.94 15.726 0 10.606C0.430915 8.27777 1.60158 6.15072 3.338 4.541ZM13.576 14.778L12.112 13.314C11.552 13.5819 10.9228 13.6695 10.3109 13.5648C9.69909 13.46 9.1348 13.1681 8.69587 12.7291C8.25694 12.2902 7.96497 11.7259 7.86022 11.1141C7.75546 10.5022 7.84308 9.87295 8.111 9.313L6.647 7.849C6.01072 8.81049 5.72627 9.96233 5.84183 11.1095C5.95739 12.2566 6.46585 13.3286 7.28112 14.1439C8.09639 14.9591 9.16835 15.4676 10.3155 15.5832C11.4627 15.6987 12.6145 15.4143 13.576 14.778ZM6.792 2.366C8.039 1.876 9.398 1.606 10.818 1.606C16.21 1.606 20.696 5.486 21.637 10.606C21.3306 12.272 20.6419 13.8442 19.625 15.199L15.765 11.339C15.8003 11.099 15.818 10.8547 15.818 10.606C15.8181 9.88745 15.6634 9.17731 15.3643 8.52395C15.0652 7.8706 14.6288 7.28939 14.0848 6.81991C13.5408 6.35044 12.9021 6.00372 12.212 5.80338C11.5219 5.60305 10.7968 5.5538 10.086 5.659L6.792 2.366Z"
		fill={color}
	  />
	</Svg>
);

const CheckFill = ({ width = 24, height = 24, color = '#7C7C7C' }) => (
	<Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
	  <Path
		fillRule="evenodd"
		clipRule="evenodd"
		d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
		fill={color}
	  />
	</Svg>
);

// home page icons
const CarOutline = ({ width = 17, height = 15, color = '#0F100D' }) => (
	<Svg width={width} height={height} viewBox="0 0 17 15" fill="none">
		<Path
		  d="M16.1 6.8825L12.4583 3.95333V1.95833C12.4777 1.5585 12.3378 1.16729 12.0692 0.870478C11.8005 0.57367 11.4252 0.395489 11.0254 0.375H2.00042C1.60345 0.39951 1.23212 0.579434 0.966878 0.875795C0.701635 1.17216 0.563835 1.56109 0.583332 1.95833V9.875C0.575984 10.1894 0.662415 10.4988 0.831606 10.7639C1.0008 11.029 1.24509 11.2376 1.53333 11.3633C1.38753 11.72 1.33071 12.1068 1.36777 12.4904C1.40482 12.8739 1.53465 13.2427 1.74603 13.5648C1.95742 13.887 2.24402 14.1529 2.5811 14.3396C2.91819 14.5263 3.29564 14.6282 3.68088 14.6364C4.06612 14.6447 4.44759 14.5591 4.79236 14.387C5.13713 14.2149 5.43486 13.9615 5.65985 13.6487C5.88485 13.3359 6.03035 12.973 6.0838 12.5914C6.13725 12.2098 6.09705 11.8209 5.96667 11.4583H11.0017C10.8715 11.8171 10.8296 12.2019 10.8797 12.5802C10.9298 12.9585 11.0703 13.3192 11.2893 13.6317C11.5083 13.9443 11.7994 14.1994 12.138 14.3755C12.4765 14.5517 12.8525 14.6436 13.2342 14.6436C13.6158 14.6436 13.9918 14.5517 14.3303 14.3755C14.6689 14.1994 14.96 13.9443 15.179 13.6317C15.3981 13.3192 15.5386 12.9585 15.5886 12.5802C15.6387 12.2019 15.5969 11.8171 15.4667 11.4583H15.625C15.835 11.4583 16.0363 11.3749 16.1848 11.2265C16.3333 11.078 16.4167 10.8766 16.4167 10.6667V7.5C16.4142 7.37978 16.3845 7.2617 16.3296 7.1547C16.2747 7.04771 16.1962 6.95462 16.1 6.8825ZM14.8333 7.88V9.875H12.4583V5.98L14.8333 7.88ZM4.54167 12.25C4.54167 12.4066 4.49523 12.5596 4.40825 12.6898C4.32126 12.82 4.19761 12.9215 4.05296 12.9814C3.9083 13.0413 3.74912 13.057 3.59555 13.0265C3.44198 12.9959 3.30092 12.9205 3.19021 12.8098C3.07949 12.6991 3.00409 12.558 2.97354 12.4044C2.943 12.2509 2.95867 12.0917 3.01859 11.947C3.07851 11.8024 3.17998 11.6787 3.31017 11.5918C3.44036 11.5048 3.59342 11.4583 3.75 11.4583C3.95996 11.4583 4.16132 11.5417 4.30979 11.6902C4.45826 11.8387 4.54167 12.04 4.54167 12.25ZM8.5 9.875H2.16667V1.95833H10.875V9.875H8.5ZM14.0417 12.25C14.0417 12.4066 13.9952 12.5596 13.9082 12.6898C13.8213 12.82 13.6976 12.9215 13.553 12.9814C13.4083 13.0413 13.2491 13.057 13.0956 13.0265C12.942 12.9959 12.8009 12.9205 12.6902 12.8098C12.5795 12.6991 12.5041 12.558 12.4735 12.4044C12.443 12.2509 12.4587 12.0917 12.5186 11.947C12.5785 11.8024 12.68 11.6787 12.8102 11.5918C12.9404 11.5048 13.0934 11.4583 13.25 11.4583C13.46 11.4583 13.6613 11.5417 13.8098 11.6902C13.9583 11.8387 14.0417 12.04 14.0417 12.25Z"
		  stroke={color}
		/>
	</Svg>
);

const CatPhone = ({ width = 18, height = 18, color = '#0F100D' }) => (
	<Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
		<Path
		  d="M3.375 2.25C3.375 1.65326 3.61205 1.08097 4.03401 0.65901C4.45597 0.237053 5.02826 0 5.625 0L12.375 0C12.9717 0 13.544 0.237053 13.966 0.65901C14.3879 1.08097 14.625 1.65326 14.625 2.25V15.75C14.625 16.3467 14.3879 16.919 13.966 17.341C13.544 17.7629 12.9717 18 12.375 18H5.625C5.02826 18 4.45597 17.7629 4.03401 17.341C3.61205 16.919 3.375 16.3467 3.375 15.75V2.25ZM10.125 14.625C10.125 14.3266 10.0065 14.0405 9.7955 13.8295C9.58452 13.6185 9.29837 13.5 9 13.5C8.70163 13.5 8.41548 13.6185 8.2045 13.8295C7.99353 14.0405 7.875 14.3266 7.875 14.625C7.875 14.9234 7.99353 15.2095 8.2045 15.4205C8.41548 15.6315 8.70163 15.75 9 15.75C9.29837 15.75 9.58452 15.6315 9.7955 15.4205C10.0065 15.2095 10.125 14.9234 10.125 14.625Z"
		  fill={color}
		/>
	</Svg>
);

const CatBed = ({ width = 18, height = 18, color = '#0F100D' }) => (
	<Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
		<Path
		  d="M1.5 14.25V9.75C1.5 9.4125 1.56875 9.10625 1.70625 8.83125C1.84375 8.55625 2.025 8.3125 2.25 8.1V6C2.25 5.375 2.46875 4.84375 2.90625 4.40625C3.34375 3.96875 3.875 3.75 4.5 3.75H7.5C7.7875 3.75 8.05625 3.80325 8.30625 3.90975C8.55625 4.01625 8.7875 4.163 9 4.35C9.2125 4.1625 9.44375 4.01575 9.69375 3.90975C9.94375 3.80375 10.2125 3.7505 10.5 3.75H13.5C14.125 3.75 14.6563 3.96875 15.0938 4.40625C15.5313 4.84375 15.75 5.375 15.75 6V8.1C15.975 8.3125 16.1563 8.55625 16.2938 8.83125C16.4313 9.10625 16.5 9.4125 16.5 9.75V14.25H15V12.75H3V14.25H1.5ZM9.75 7.5H14.25V6C14.25 5.7875 14.178 5.6095 14.034 5.466C13.89 5.3225 13.712 5.2505 13.5 5.25H10.5C10.2875 5.25 10.1095 5.322 9.966 5.466C9.8225 5.61 9.7505 5.788 9.75 6V7.5ZM3.75 7.5H8.25V6C8.25 5.7875 8.178 5.6095 8.034 5.466C7.89 5.3225 7.712 5.2505 7.5 5.25H4.5C4.2875 5.25 4.1095 5.322 3.966 5.466C3.8225 5.61 3.7505 5.788 3.75 6V7.5Z"
		  fill={color}
		/>
	</Svg>
);

const CatToy = ({ width = 18, height = 18, color = '#0F100D' }) => (
	<Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <G clipPath="url(#clip0_15_157)">
      <Path
        d="M9 9C9 6.75 10.875 4.875 13.125 4.875C15.375 4.875 17.25 6.75 17.25 9H9ZM9 9C9 11.25 7.125 13.125 4.875 13.125C2.625 13.125 0.75 11.25 0.75 9H9ZM9 9C6.75 9 4.875 7.125 4.875 4.875C4.875 2.625 6.75 0.75 9 0.75V9ZM9 9C11.25 9 13.125 10.875 13.125 13.125C13.125 15.375 11.25 17.25 9 17.25V9Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_15_157">
        <Rect width={18} height={18} fill="white" />
      </ClipPath>
    </Defs>
	</Svg>
);

const CatGames = ({ width = 18, height = 18, color = '#0F100D' }) => (
	<Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
		<Path
		   d="M6.18975 3.375C4.84709 3.375 3.55943 3.90837 2.61002 4.85777C1.66062 5.80717 1.12725 7.09484 1.12725 8.4375C1.12725 9.78016 1.66062 11.0678 2.61002 12.0172C3.55943 12.9666 4.84709 13.5 6.18975 13.5H11.8238C13.1664 13.5 14.4541 12.9666 15.4035 12.0172C16.3529 11.0678 16.8863 9.78016 16.8863 8.4375C16.8863 7.09484 16.3529 5.80717 15.4035 4.85777C14.4541 3.90837 13.1664 3.375 11.8238 3.375H6.18975ZM3.942 8.4375C3.942 8.28832 4.00126 8.14524 4.10675 8.03975C4.21224 7.93426 4.35532 7.875 4.5045 7.875H5.6295V6.75C5.6295 6.60082 5.68876 6.45774 5.79425 6.35225C5.89974 6.24676 6.04282 6.1875 6.192 6.1875C6.34119 6.1875 6.48426 6.24676 6.58975 6.35225C6.69524 6.45774 6.7545 6.60082 6.7545 6.75V7.875H7.8795C8.02869 7.875 8.17176 7.93426 8.27725 8.03975C8.38274 8.14524 8.442 8.28832 8.442 8.4375C8.442 8.58668 8.38274 8.72976 8.27725 8.83525C8.17176 8.94074 8.02869 9 7.8795 9H6.7545V10.125C6.7545 10.2742 6.69524 10.4173 6.58975 10.5227C6.48426 10.6282 6.34119 10.6875 6.192 10.6875C6.04282 10.6875 5.89974 10.6282 5.79425 10.5227C5.68876 10.4173 5.6295 10.2742 5.6295 10.125V9H4.5045C4.35532 9 4.21224 8.94074 4.10675 8.83525C4.00126 8.72976 3.942 8.58668 3.942 8.4375ZM12.375 10.125C12.375 10.4234 12.2565 10.7095 12.0455 10.9205C11.8345 11.1315 11.5484 11.25 11.25 11.25C10.9516 11.25 10.6655 11.1315 10.4545 10.9205C10.2435 10.7095 10.125 10.4234 10.125 10.125C10.125 9.82663 10.2435 9.54048 10.4545 9.3295C10.6655 9.11853 10.9516 9 11.25 9C11.5484 9 11.8345 9.11853 12.0455 9.3295C12.2565 9.54048 12.375 9.82663 12.375 10.125ZM12.375 7.875C12.0766 7.875 11.7905 7.75647 11.5795 7.5455C11.3685 7.33452 11.25 7.04837 11.25 6.75C11.25 6.45163 11.3685 6.16548 11.5795 5.9545C11.7905 5.74353 12.0766 5.625 12.375 5.625C12.6734 5.625 12.9595 5.74353 13.1705 5.9545C13.3815 6.16548 13.5 6.45163 13.5 6.75C13.5 7.04837 13.3815 7.33452 13.1705 7.5455C12.9595 7.75647 12.6734 7.875 12.375 7.875Z"
		  fill={color}
		/>
	</Svg>
);

const CatLaptops = ({ width = 18, height = 18, color = '#0F100D' }) => (
	<Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
		<Path
		   d="M15.75 14.25C15.9411 14.2502 16.125 14.3234 16.264 14.4546C16.403 14.5859 16.4867 14.7652 16.4979 14.956C16.5091 15.1469 16.447 15.3348 16.3243 15.4814C16.2016 15.628 16.0276 15.7222 15.8377 15.7448L15.75 15.75H2.24998C2.05882 15.7498 1.87496 15.6766 1.73596 15.5454C1.59695 15.4141 1.51331 15.2348 1.5021 15.044C1.4909 14.8531 1.55299 14.6652 1.67568 14.5186C1.79837 14.372 1.97241 14.2778 2.16223 14.2552L2.24998 14.25H15.75ZM14.25 3C14.6284 2.99988 14.9929 3.1428 15.2704 3.40012C15.5479 3.65744 15.7178 4.01013 15.7462 4.3875L15.75 4.5V12C15.7501 12.3784 15.6072 12.7429 15.3499 13.0204C15.0925 13.2979 14.7398 13.4679 14.3625 13.4963L14.25 13.5H3.74998C3.37155 13.5001 3.00706 13.3572 2.72957 13.0999C2.45208 12.8426 2.28211 12.4899 2.25373 12.1125L2.24998 12V4.5C2.24986 4.12157 2.39279 3.75708 2.6501 3.47959C2.90742 3.2021 3.26011 3.03213 3.63748 3.00375L3.74998 3H14.25Z"
		  fill={color}
		/>
	</Svg>
);

const HomeIcon = ({ width = 22, height = 22, color = '#7C7C7C' }) => (
	<Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
	  <Path
		d="M11.3584 3.90684C11.2705 3.81728 11.1651 3.74672 11.0488 3.69955C10.9325 3.65237 10.8078 3.62958 10.6823 3.63259C10.5568 3.6356 10.4333 3.66434 10.3194 3.71703C10.2055 3.76973 10.1036 3.84525 10.0201 3.93892L4.35783 10.2813C4.20787 10.4493 4.12499 10.6667 4.125 10.8918V17.875C4.125 18.1181 4.22158 18.3513 4.39349 18.5232C4.56539 18.6951 4.79855 18.7917 5.04167 18.7917H7.79167C8.03478 18.7917 8.26794 18.6951 8.43985 18.5232C8.61176 18.3513 8.70833 18.1181 8.70833 17.875V14.6667C8.70833 14.4236 8.80491 14.1904 8.97682 14.0185C9.14873 13.8466 9.38188 13.75 9.625 13.75H12.375C12.6181 13.75 12.8513 13.8466 13.0232 14.0185C13.1951 14.1904 13.2917 14.4236 13.2917 14.6667V17.875C13.2917 18.1181 13.3882 18.3513 13.5602 18.5232C13.7321 18.6951 13.9652 18.7917 14.2083 18.7917H16.9583C17.2014 18.7917 17.4346 18.6951 17.6065 18.5232C17.7784 18.3513 17.875 18.1181 17.875 17.875V10.9166C17.8747 10.6765 17.7803 10.4461 17.6119 10.2749L11.3584 3.90684Z"
		stroke={color}
	  />
	</Svg>
);

const Favorite = ({ width = 21, height = 21, color = '#7C7C7C' }) => (
	<Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
		<Path
		  d="M10.5 17.1972L9.83675 16.5979C8.40875 15.2935 7.2275 14.177 6.293 13.2484C5.35909 12.3191 4.62175 11.4995 4.081 10.7896C3.54025 10.0797 3.16225 9.43802 2.947 8.8646C2.73175 8.29118 2.62442 7.71339 2.625 7.13123C2.625 6.01823 3.003 5.08373 3.759 4.32773C4.515 3.57173 5.4495 3.19373 6.5625 3.19373C7.3325 3.19373 8.05438 3.3906 8.72813 3.78435C9.40188 4.1781 9.9925 4.75093 10.5 5.50285C11.0075 4.75093 11.5981 4.1781 12.2719 3.78435C12.9456 3.3906 13.6675 3.19373 14.4375 3.19373C15.5505 3.19373 16.485 3.57173 17.241 4.32773C17.997 5.08373 18.375 6.01823 18.375 7.13123C18.375 7.71223 18.2677 8.28973 18.053 8.86373C17.8378 9.43889 17.4598 10.0811 16.919 10.7905C16.3783 11.4998 15.6435 12.3191 14.7149 13.2484C13.7862 14.177 12.602 15.2935 11.1624 16.5979L10.5 17.1972ZM10.5 16.0125C11.9 14.7466 13.0521 13.6628 13.9563 12.761C14.8604 11.8591 15.575 11.076 16.1 10.4116C16.625 9.74719 16.9896 9.15948 17.1938 8.64848C17.3979 8.13631 17.5 7.63056 17.5 7.13123C17.5 6.25623 17.2083 5.52706 16.625 4.94373C16.0417 4.36039 15.3125 4.06873 14.4375 4.06873C13.741 4.06873 13.0982 4.26764 12.509 4.66548C11.9198 5.06331 11.3931 5.6621 10.9288 6.46185H10.073C9.59642 5.65102 9.06646 5.04931 8.48313 4.65673C7.89979 4.26473 7.25988 4.06873 6.56338 4.06873C5.70004 4.06873 4.97379 4.36039 4.38463 4.94373C3.79546 5.52706 3.50059 6.25623 3.5 7.13123C3.5 7.63056 3.60209 8.13631 3.80625 8.64848C4.01042 9.16064 4.375 9.74835 4.9 10.4116C5.425 11.0749 6.13959 11.8551 7.04375 12.7522C7.94792 13.6494 9.1 14.7361 10.5 16.0125Z"
		  fill={color}
		/>
	</Svg>
);

const Cart = ({ width = 21, height = 21, color = '#7C7C7C' }) => (
	<Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
		<Path
		  d="M3.24625 4.725H16.5585C17.7643 4.725 18.6349 5.83625 18.3041 6.9545L16.8569 11.8545C16.6338 12.607 15.9215 13.125 15.1113 13.125H7.098C6.28688 13.125 5.57375 12.6061 5.3515 11.8545L3.24625 4.725ZM3.24625 4.725L2.625 2.625M14.4375 18.375C14.7856 18.375 15.1194 18.2367 15.3656 17.9906C15.6117 17.7444 15.75 17.4106 15.75 17.0625C15.75 16.7144 15.6117 16.3806 15.3656 16.1344C15.1194 15.8883 14.7856 15.75 14.4375 15.75C14.0894 15.75 13.7556 15.8883 13.5094 16.1344C13.2633 16.3806 13.125 16.7144 13.125 17.0625C13.125 17.4106 13.2633 17.7444 13.5094 17.9906C13.7556 18.2367 14.0894 18.375 14.4375 18.375ZM7.4375 18.375C7.7856 18.375 8.11944 18.2367 8.36558 17.9906C8.61172 17.7444 8.75 17.4106 8.75 17.0625C8.75 16.7144 8.61172 16.3806 8.36558 16.1344C8.11944 15.8883 7.7856 15.75 7.4375 15.75C7.0894 15.75 6.75556 15.8883 6.50942 16.1344C6.26328 16.3806 6.125 16.7144 6.125 17.0625C6.125 17.4106 6.26328 17.7444 6.50942 17.9906C6.75556 18.2367 7.0894 18.375 7.4375 18.375Z"
		  stroke={color}
		  strokeLinecap="round"
		  strokeLinejoin="round"
		/>
	</Svg>
);

const UserHome = ({ width = 21, height = 21, color = '#1E1E1E' }) => (
	<Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
    <Path
      d="M10.5 8.75C12.433 8.75 14 7.183 14 5.25C14 3.317 12.433 1.75 10.5 1.75C8.567 1.75 7 3.317 7 5.25C7 7.183 8.567 8.75 10.5 8.75Z"
      stroke={color}
    />
    <Path
      d="M17.5 15.3125C17.5 17.4869 17.5 19.25 10.5 19.25C3.5 19.25 3.5 17.4869 3.5 15.3125C3.5 13.1381 6.63425 11.375 10.5 11.375C14.3658 11.375 17.5 13.1381 17.5 15.3125Z"
      stroke={color}
    />
	</Svg>
);

// product icons
const Share = ({ width = 18, height = 20, color = '#7C7C7C' }) => (
	<Svg width={width} height={height} viewBox="0 0 18 20" fill="none">
		<Path
		  d="M14.9942 19.75C14.2763 19.75 13.6671 19.499 13.1666 18.9971C12.6668 18.4944 12.4169 17.8841 12.4169 17.1663C12.4169 17.0579 12.4646 16.7846 12.5599 16.3462L4.76317 11.7171C4.52917 11.9872 4.24281 12.1992 3.90408 12.353C3.56536 12.5068 3.20172 12.5838 2.81317 12.5838C2.10106 12.5838 1.49583 12.3302 0.9975 11.8232C0.499167 11.3162 0.25 10.7085 0.25 10C0.25 9.2915 0.499167 8.68375 0.9975 8.17675C1.49583 7.66975 2.10106 7.41625 2.81317 7.41625C3.201 7.41625 3.56464 7.49317 3.90408 7.647C4.24353 7.80083 4.52989 8.01317 4.76317 8.284L12.561 3.67442C12.5104 3.53431 12.474 3.39528 12.4516 3.25733C12.4285 3.11867 12.4169 2.97711 12.4169 2.83267C12.4169 2.1155 12.6686 1.50558 13.172 1.00292C13.6754 0.500972 14.2864 0.25 15.005 0.25C15.7236 0.25 16.3332 0.501694 16.8337 1.00508C17.3342 1.50847 17.5841 2.11947 17.5833 2.83808C17.5826 3.55669 17.3316 4.16625 16.8304 4.66675C16.3292 5.16725 15.7189 5.41714 14.9996 5.41642C14.6081 5.41642 14.247 5.33625 13.9162 5.17592C13.5855 5.01558 13.3038 4.8 13.0712 4.52917L5.27233 9.15825C5.32289 9.29836 5.35936 9.43775 5.38175 9.57642C5.40486 9.71436 5.41642 9.85556 5.41642 10C5.41642 10.1444 5.40486 10.2856 5.38175 10.4236C5.35864 10.5615 5.32253 10.7009 5.27342 10.8418L13.0712 15.4708C13.3045 15.2 13.5862 14.9844 13.9162 14.8241C14.247 14.6637 14.6081 14.5836 14.9996 14.5836C15.7175 14.5836 16.3277 14.8349 16.8304 15.3376C17.3324 15.8417 17.5833 16.4531 17.5833 17.1717C17.5833 17.8903 17.3316 18.4998 16.8282 19.0003C16.3249 19.5008 15.7128 19.7507 14.9942 19.75Z"
		  fill={color}
		/>
	</Svg>
);

const Heart = ({ width = 28, height = 28, color = '#7C7C7C' }) => (
	<Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
		<Path
		  d="M14 22.9297L13.1157 22.1305C11.2117 20.3914 9.63667 18.9027 8.39067 17.6645C7.14545 16.4255 6.16234 15.3327 5.44134 14.3862C4.72034 13.4396 4.21634 12.5841 3.92934 11.8195C3.64234 11.0549 3.49923 10.2846 3.5 9.50833C3.5 8.02433 4.004 6.77833 5.012 5.77033C6.02 4.76233 7.266 4.25833 8.75 4.25833C9.77667 4.25833 10.7392 4.52083 11.6375 5.04583C12.5358 5.57083 13.3233 6.33461 14 7.33716C14.6767 6.33461 15.4642 5.57083 16.3625 5.04583C17.2608 4.52083 18.2233 4.25833 19.25 4.25833C20.734 4.25833 21.98 4.76233 22.988 5.77033C23.996 6.77833 24.5 8.02433 24.5 9.50833C24.5 10.283 24.3569 11.053 24.0707 11.8183C23.7837 12.5852 23.2797 13.4416 22.5587 14.3873C21.8377 15.3331 20.8581 16.4255 19.6198 17.6645C18.3816 18.9027 16.8027 20.3914 14.8832 22.1305L14 22.9297ZM14 21.35C15.8667 19.6622 17.4028 18.2171 18.6083 17.0147C19.8139 15.8122 20.7667 14.7681 21.4667 13.8822C22.1667 12.9963 22.6528 12.2127 22.925 11.5313C23.1972 10.8484 23.3333 10.1741 23.3333 9.50833C23.3333 8.34166 22.9444 7.36944 22.1667 6.59166C21.3889 5.81389 20.4167 5.425 19.25 5.425C18.3213 5.425 17.4642 5.69022 16.6787 6.22066C15.8931 6.75111 15.1908 7.5495 14.5717 8.61583H13.4307C12.7952 7.53472 12.0886 6.73244 11.3108 6.209C10.5331 5.68633 9.67984 5.425 8.75117 5.425C7.60006 5.425 6.63173 5.81389 5.84617 6.59166C5.06061 7.36944 4.66745 8.34166 4.66667 9.50833C4.66667 10.1741 4.80278 10.8484 5.075 11.5313C5.34723 12.2142 5.83334 12.9978 6.53334 13.8822C7.23334 14.7665 8.18611 15.8068 9.39167 17.003C10.5972 18.1992 12.1333 19.6482 14 21.35Z"
		  fill={color}
		/>
	</Svg>
);

const CartAdd = ({ width = 22, height = 22, color = '#FFFFFF' }) => (
	<Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
		<Path
		  d="M3.40083 4.95H17.347C18.6102 4.95 19.5223 6.11417 19.1758 7.28567L17.6596 12.419C17.4258 13.2073 16.6797 13.75 15.8308 13.75H7.436C6.58625 13.75 5.83917 13.2064 5.60633 12.419L3.40083 4.95ZM3.40083 4.95L2.75 2.75M15.125 19.25C15.4897 19.25 15.8394 19.1051 16.0973 18.8473C16.3551 18.5894 16.5 18.2397 16.5 17.875C16.5 17.5103 16.3551 17.1606 16.0973 16.9027C15.8394 16.6449 15.4897 16.5 15.125 16.5C14.7603 16.5 14.4106 16.6449 14.1527 16.9027C13.8949 17.1606 13.75 17.5103 13.75 17.875C13.75 18.2397 13.8949 18.5894 14.1527 18.8473C14.4106 19.1051 14.7603 19.25 15.125 19.25ZM7.79167 19.25C8.15634 19.25 8.50608 19.1051 8.76394 18.8473C9.0218 18.5894 9.16667 18.2397 9.16667 17.875C9.16667 17.5103 9.0218 17.1606 8.76394 16.9027C8.50608 16.6449 8.15634 16.5 7.79167 16.5C7.42699 16.5 7.07726 16.6449 6.8194 16.9027C6.56153 17.1606 6.41667 17.5103 6.41667 17.875C6.41667 18.2397 6.56153 18.5894 6.8194 18.8473C7.07726 19.1051 7.42699 19.25 7.79167 19.25Z"
		  stroke={color}
		  strokeLinecap="round"
		  strokeLinejoin="round"
		/>
	</Svg>
);

const ShopCart = ({width = 18, height = 18, color = '#0F100D'}) => (
	<Svg width={width} height={height} viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/
2000/svg">
		<Path d="M16.1 6.8825L12.4583 3.95333V1.95833C12.4777 1.5585 12.3378 1.16729 12.0692 0.870478C11.8005 0.57367 11.4252 0.395489 11.0254 0.375H2.00042C1.60345 0.39951 1.23212 0.579434 0.966878 0.875795C0.701635 1.17216 0.563835 1.56109 0.583332 1.95833V9.875C0.575984 10.1894 0.662415 10.4988 0.831606 10.7639C1.0008 11.029 1.24509 11.2376 1.53333 11.3633C1.38753 11.72 1.33071 12.1068 1.36777 12.4904C1.40482 12.8739 1.53465 13.2427 1.74603 13.5648C1.95742 13.887 2.24402 14.1529 2.5811 14.3396C2.91819 14.5263 3.29564 14.6282 3.68088 14.6364C4.06612 14.6447 4.44759 14.5591 4.79236 14.387C5.13713 14.2149 5.43486 13.9615 5.65986 13.6487C5.88485 13.3359 6.03035 12.973 6.0838 12.5914C6.13725 12.2098 6.09705 11.8209 5.96667 11.4583H11.0017C10.8715 11.8171 10.8296 12.2019 10.8797 12.5802C10.9298 12.9585 11.0703 13.3192 11.2893 13.6317C11.5083 13.9443 11.7994 14.1994 12.138 14.3755C12.4765 14.5517 12.8525 14.6436 13.2342 14.6436C13.6158 14.6436 13.9918 14.5517 14.3303 14.3755C14.6689 14.1994 14.96 13.9443 15.179 13.6317C15.3981 13.3192 15.5386 12.9585 15.5886 12.5802C15.6387 12.2019 15.5969 11.8171 15.4667 11.4583H15.625C15.835 11.4583 16.0363 11.3749 16.1848 11.2265C16.3333 11.078 16.4167 10.8766 16.4167 10.6667V7.5C16.4142 7.37978 16.3845 7.2617 16.3296 7.1547C16.2747 7.04771 16.1962 6.95462 16.1 6.8825ZM14.8333 7.88V9.875H12.4583V5.98L14.8333 7.88ZM4.54167 12.25C4.54167 12.4066 4.49524 12.5596 4.40825 12.6898C4.32126 12.82 4.19761 12.9215 4.05296 12.9814C3.9083 13.0413 3.74912 13.057 3.59555 13.0265C3.44198 12.9959 3.30092 12.9205 3.19021 12.8098C3.07949 12.6991 3.00409 12.558 2.97354 12.4044C2.943 12.2509 2.95867 12.0917 3.01859 11.947C3.07851 11.8024 3.17998 11.6787 3.31017 11.5918C3.44036 11.5048 3.59342 11.4583 3.75 11.4583C3.95996 11.4583 4.16133 11.5417 4.30979 11.6902C4.45826 11.8387 4.54167 12.04 4.54167 12.25ZM8.5 9.875H2.16667V1.95833H10.875V9.875H8.5ZM14.0417 12.25C14.0417 12.4066 13.9952 12.5596 13.9082 12.6898C13.8213 12.82 13.6976 12.9215 13.553 12.9814C13.4083 13.0413 13.2491 13.057 13.0956 13.0265C12.942 12.9959 12.8009 12.9205 12.6902 12.8098C12.5795 12.6991 12.5041 12.558 12.4735 12.4044C12.443 12.2509 12.4587 12.0917 12.5186 11.947C12.5785 11.8024 12.68 11.6787 12.8102 11.5918C12.9404 11.5048 13.0934 11.4583 13.25 11.4583C13.46 11.4583 13.6613 11.5417 13.8098 11.6902C13.9583 11.8387 14.0417 12.04 14.0417 12.25Z" 
		fill={color}/>
	</Svg>
);

const Search = ({width = 18, height = 18, color = '#7C7C7C'}) => (
	<Svg width={width} height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/
2000/svg">
		<Path d="M15.5271 16.1912C15.9296 16.5937 16.5509 15.9725 16.1484 15.5787L12.8671 12.2887C14.0184 11.0154 14.6547 9.35917 14.6521 7.6425C14.6521 3.80125 11.5284 0.677498 7.68714 0.677498C3.84589 0.677498 0.722137 3.80125 0.722137 7.6425C0.722137 11.4837 3.84589 14.6075 7.68714 14.6075C9.41964 14.6075 11.0209 13.9687 12.2459 12.91L15.5271 16.1912ZM1.59626 7.6425C1.59626 4.2825 4.33501 1.5525 7.68626 1.5525C11.0463 1.5525 13.7763 4.2825 13.7763 7.6425C13.7763 11.0025 11.0463 13.7325 7.68626 13.7325C4.33501 13.7325 1.59626 11.0025 1.59626 7.6425Z" 
		fill={color}/>
	</Svg>
);

const Star = ({width = 16, height = 16, color = '#F0D63A'}) => (
	<Svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/
2000/svg">
		<Path d="M10.708 13.3733C10.5999 13.3731 10.4935 13.3465 10.398 13.296L7 11.5093L3.602 13.296C3.49198 13.3536 3.36804 13.3794 3.24416 13.3704C3.12028 13.3613 3.00138 13.3179 2.90088 13.2449C2.80037 13.1719 2.72226 13.0723 2.67534 12.9573C2.62842 12.8423 2.61457 12.7165 2.63533 12.594L3.284 8.81L0.534668 6.13C0.445728 6.04316 0.382838 5.93319 0.353098 5.8125C0.323358 5.6918 0.327954 5.5652 0.366367 5.44698C0.404779 5.32876 0.475478 5.22364 0.570481 5.14347C0.665483 5.06331 0.781005 5.01131 0.904002 4.99333L4.70334 4.44133L6.40267 0.998668C6.46388 0.894562 6.55123 0.808252 6.65606 0.748283C6.76089 0.688315 6.87957 0.656769 7.00034 0.656769C7.12111 0.656769 7.23978 0.688315 7.34461 0.748283C7.44944 0.808252 7.53679 0.894562 7.598 0.998668L9.29667 4.44133L13.096 4.99333C13.219 5.01131 13.3345 5.06331 13.4295 5.14347C13.5245 5.22364 13.5952 5.32876 13.6336 5.44698C13.672 5.5652 13.6766 5.6918 13.6469 5.8125C13.6172 5.93319 13.5543 6.04316 13.4653 6.13L10.716 8.81L11.3653 12.594C11.3817 12.6897 11.3771 12.7877 11.3516 12.8814C11.3262 12.975 11.2806 13.062 11.2181 13.1362C11.1555 13.2105 11.0776 13.2701 10.9896 13.3111C10.9016 13.352 10.8051 13.3733 10.708 13.3733Z" 
		fill={color}/>
	</Svg>
);


// profile page icons
const UserProfile = ({ width = 16, height = 17, color = '#1E1E1E' }) => (
	<Svg width={width} height={height} viewBox="0 0 15 16" fill="none">
 <Path
      d="M14 14.8353C13.6173 13.7619 12.7718 12.8139 11.5967 12.1376C10.4215 11.4612 8.98136 11.0945 7.5 11.0945C6.01864 11.0945 4.57849 11.4612 3.40333 12.1376C2.22816 12.8139 1.38275 13.7619 1 14.8353"
      stroke={color}
      strokeWidth={0.666667}
      strokeLinecap="round"
    />
    <Path
      d="M7.50008 7.72965C9.35842 7.72965 10.8649 6.22317 10.8649 4.36482C10.8649 2.50648 9.35842 1 7.50008 1C5.64174 1 4.13525 2.50648 4.13525 4.36482C4.13525 6.22317 5.64174 7.72965 7.50008 7.72965Z"
      stroke={color}
      strokeWidth={0.666667}
      strokeLinecap="round"
    />
	</Svg>
);

const AddressPin = ({ width = 13, height = 16, color = '#1E1E1E' }) => (
	<Svg width={width} height={height} viewBox="0 0 11 14" fill="none">
	<Path
	  d="M5.71858 12.8959L5.7186 12.8959L5.722 12.8929C6.50196 12.1851 7.22381 11.4159 7.88058 10.5925L7.88081 10.5923C9.25825 8.86167 10.1365 7.10841 10.1964 5.50579L10.1964 5.50546C10.2202 4.85189 10.1121 4.20023 9.87835 3.58941C9.64466 2.97859 9.29024 2.42113 8.83628 1.95035C8.38232 1.47957 7.83813 1.10511 7.23621 0.849348C6.63429 0.593587 5.987 0.46177 5.333 0.46177C4.679 0.46177 4.03171 0.593587 3.42979 0.849348C2.82787 1.10511 2.28368 1.47957 1.82972 1.95035C1.37576 2.42113 1.02134 2.97859 0.787648 3.58941C0.553951 4.20023 0.445765 4.85189 0.469554 5.50546L0.469572 5.50593C0.530193 7.10849 1.40911 8.86169 2.78581 10.5922L2.78608 10.5925C3.44286 11.4159 4.16471 12.1851 4.94467 12.8929L4.94519 12.8933C5.01943 12.9604 5.07808 13.0123 5.11901 13.0466L5.33878 13.2311L5.55391 13.0413L5.71858 12.8959ZM5.06489 13.1754L5.06503 13.1753L5.05612 13.1678L5.05608 13.1677L5.05606 13.1677L5.05566 13.1674L5.05353 13.1656L5.04414 13.1576L5.00572 13.1244C4.97167 13.0948 4.92114 13.0503 4.85648 12.992C4.72715 12.8755 4.54147 12.7037 4.31822 12.4849C3.87133 12.0468 3.276 11.422 2.68149 10.6749C1.48044 9.16577 0.333333 7.22006 0.333333 5.33333C0.333333 4.00725 0.860118 2.73548 1.7978 1.7978C2.73548 0.860118 4.00725 0.333333 5.33333 0.333333C6.65942 0.333333 7.93119 0.860118 8.86887 1.7978C9.80655 2.73548 10.3333 4.00725 10.3333 5.33333C10.3333 7.22006 9.18623 9.16577 7.98518 10.6749C7.39067 11.422 6.79534 12.0468 6.34844 12.4849C6.1252 12.7037 5.93951 12.8755 5.81018 12.992C5.74553 13.0503 5.695 13.0948 5.66094 13.1244L5.62252 13.1576L5.61314 13.1656L5.611 13.1674L5.61061 13.1677L5.61059 13.1677L5.61054 13.1678L5.60497 13.1725L5.59954 13.1775C5.45978 13.3061 5.21129 13.3078 5.06489 13.1754ZM5.33333 7.53333C5.91681 7.53333 6.47639 7.30155 6.88897 6.88897C7.30155 6.47639 7.53333 5.91681 7.53333 5.33333C7.53333 4.74986 7.30155 4.19028 6.88897 3.7777C6.47639 3.36512 5.91681 3.13333 5.33333 3.13333C4.74986 3.13333 4.19028 3.36512 3.7777 3.7777C3.36512 4.19028 3.13333 4.74986 3.13333 5.33333C3.13333 5.91681 3.36512 6.47639 3.7777 6.88897C4.19028 7.30155 4.74986 7.53333 5.33333 7.53333ZM5.33333 7.66667C4.7145 7.66667 4.121 7.42083 3.68342 6.98325C3.24583 6.54566 3 5.95217 3 5.33333C3 4.7145 3.24583 4.121 3.68342 3.68342C4.121 3.24583 4.7145 3 5.33333 3C5.95217 3 6.54566 3.24583 6.98325 3.68342C7.42083 4.121 7.66667 4.7145 7.66667 5.33333C7.66667 5.95217 7.42083 6.54566 6.98325 6.98325C6.54566 7.42083 5.95217 7.66667 5.33333 7.66667Z"
	  fill="white"
	  stroke={color}
	  strokeWidth={0.666667}
	/>
	</Svg>
);

const Help = ({ width = 18, height = 18, color = '#1E1E1E' }) => (
	<Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
	<Path
	  d="M8.66331 14.004L7.32997 14V12.6627H8.67131L8.66331 14.004ZM7.32997 11.6333V10.0467C7.32997 9.28001 7.67531 8.64001 8.08797 8.13267C8.49731 7.62867 9.01797 7.20134 9.45797 6.85467C9.74564 6.62793 9.97664 6.33742 10.1327 6.00607C10.2888 5.67472 10.3658 5.31161 10.3575 4.94543C10.3491 4.57925 10.2558 4.22001 10.0848 3.8961C9.91378 3.57219 9.66981 3.29247 9.37214 3.07903C9.07447 2.8656 8.73126 2.7243 8.36961 2.66628C8.00795 2.60827 7.63776 2.63514 7.28827 2.74476C6.93878 2.85438 6.61956 3.04376 6.35583 3.29794C6.0921 3.55212 5.89108 3.86413 5.76864 4.20934L5.54597 4.83801L4.28931 4.39401L4.51131 3.76534C4.80265 2.94387 5.37483 2.25174 6.12685 1.81112C6.87887 1.3705 7.76238 1.20972 8.62141 1.35715C9.48045 1.50459 10.2598 1.95077 10.8218 2.61694C11.3839 3.2831 11.6926 4.12641 11.6933 4.99801C11.6935 5.55738 11.5666 6.1095 11.3222 6.61268C11.0779 7.11585 10.7224 7.55695 10.2826 7.90267C9.84597 8.24667 9.42997 8.59601 9.12264 8.97467C8.81731 9.34934 8.66331 9.69934 8.66331 10.0473V11.6333H7.32997Z"
	  fill={color}
	/>
	</Svg>
);

const Arrow = ({ width = 18, height = 32, color = '#FE724C' }) => (
	<Svg width={width} height={height} viewBox="0 0 15 30" fill="none">
	<Path
	  d="M3.06498 8.225L4.39123 6.9L11.615 14.1213C11.7314 14.237 11.8238 14.3746 11.8869 14.5261C11.95 14.6777 11.9824 14.8402 11.9824 15.0044C11.9824 15.1685 11.95 15.3311 11.8869 15.4826C11.8238 15.6342 11.7314 15.7718 11.615 15.8875L4.39123 23.1125L3.06623 21.7875L9.84623 15.0063L3.06498 8.225Z"
	  fill={color}
	/>
	</Svg>
);

const Calendar = ({ width = 14, height = 14, color = '#FE724C' }) => (
	<Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
    <Path
      d="M1 5.66656V12.3334C1 12.5102 1.07023 12.6798 1.19523 12.8048C1.32024 12.9298 1.48978 13 1.66656 13H12.3334C12.5102 13 12.6798 12.9298 12.8048 12.8048C12.9298 12.6798 13 12.5102 13 12.3334V5.66656M1 5.66656H13M1 5.66656V3C1 2.82321 1.07023 2.65367 1.19523 2.52867C1.32024 2.40366 1.48978 2.33344 1.66656 2.33344H12.3334C12.5102 2.33344 12.6798 2.40366 12.8048 2.52867C12.9298 2.65367 13 2.82321 13 3V5.66656"
      stroke={color}
      strokeWidth={0.64}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.66662 1V3.66656M4.3335 1V3.66656"
      stroke={color}
      strokeWidth={0.64}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
	</Svg>
);

const Mail = ({ width = 16, height = 12, color = '#FE724C' }) => (
	<Svg width={width} height={height} viewBox="0 0 16 12" fill="none">
 		<Path
      d="M1.25 0.75V0.375C1.15054 0.375 1.05516 0.414509 0.984835 0.484835C0.914509 0.555161 0.875 0.650544 0.875 0.75H1.25ZM14.75 0.75H15.125C15.125 0.650544 15.0855 0.555161 15.0152 0.484835C14.9448 0.414509 14.8495 0.375 14.75 0.375V0.75ZM1.25 1.125H14.75V0.375H1.25V1.125ZM14.375 0.75V9.75H15.125V0.75H14.375ZM13.25 10.875H2.75V11.625H13.25V10.875ZM1.625 9.75V0.75H0.875V9.75H1.625ZM2.75 10.875C2.45163 10.875 2.16548 10.7565 1.9545 10.5455C1.74353 10.3345 1.625 10.0484 1.625 9.75H0.875C0.875 10.2473 1.07254 10.7242 1.42417 11.0758C1.77581 11.4275 2.25272 11.625 2.75 11.625V10.875ZM14.375 9.75C14.375 10.0484 14.2565 10.3345 14.0455 10.5455C13.8345 10.7565 13.5484 10.875 13.25 10.875V11.625C13.7473 11.625 14.2242 11.4275 14.5758 11.0758C14.9275 10.7242 15.125 10.2473 15.125 9.75H14.375Z"
      fill={color}
    />
    <Path
      d="M1.25 0.75L8 7.5L14.75 0.75"
      stroke={color}
      strokeWidth={0.666667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
	</Svg>
);

const Phone = ({ width = 13, height = 13, color = '#FE724C' }) => (
	<Svg width={width} height={height} viewBox="0 0 13 13" fill="none">
    <Path
      d="M12.0002 12.6667C12.2654 12.6667 12.5197 12.5613 12.7073 12.3738C12.8948 12.1862 13.0002 11.9319 13.0002 11.6667V9.33333C13.0002 9.06812 12.8948 8.81376 12.7073 8.62623C12.5197 8.43869 12.2654 8.33333 12.0002 8.33333C11.2202 8.33333 10.4535 8.21333 9.72016 7.96667C9.54484 7.91133 9.3577 7.90506 9.17906 7.94854C9.00043 7.99203 8.83711 8.0836 8.70683 8.21333L7.74683 9.17333C6.08832 8.26828 4.72522 6.90517 3.82016 5.24667L4.7735 4.29333C5.04683 4.03333 5.14683 3.64667 5.02683 3.27333C4.78683 2.54667 4.66683 1.78 4.66683 1C4.66683 0.734784 4.56147 0.48043 4.37394 0.292893C4.1864 0.105357 3.93205 0 3.66683 0H1.3335C1.06828 0 0.813926 0.105357 0.626389 0.292893C0.438853 0.48043 0.333496 0.734784 0.333496 1C0.333496 7.43333 5.56683 12.6667 12.0002 12.6667ZM1.3335 0.666667H3.66683C3.75523 0.666667 3.84002 0.701786 3.90253 0.764298C3.96504 0.82681 4.00016 0.911595 4.00016 1C4.00016 1.85333 4.1335 2.68667 4.3935 3.48C4.42683 3.57333 4.42016 3.70667 4.3135 3.81333L3.00016 5.12C4.10016 7.27333 5.7135 8.88667 7.8735 10L9.1735 8.68667C9.26683 8.59333 9.3935 8.56667 9.5135 8.6C10.3135 8.86667 11.1468 9 12.0002 9C12.0886 9 12.1734 9.03512 12.2359 9.09763C12.2984 9.16014 12.3335 9.24493 12.3335 9.33333V11.6667C12.3335 11.7551 12.2984 11.8399 12.2359 11.9024C12.1734 11.9649 12.0886 12 12.0002 12C5.9335 12 1.00016 7.06667 1.00016 1C1.00016 0.911595 1.03528 0.82681 1.09779 0.764298C1.16031 0.701786 1.24509 0.666667 1.3335 0.666667Z"
      fill={color}
    />
	</Svg>
);

const Save = ({ width = 16, height = 16, color = '#FE724C' }) => (
	<Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M14 4.66667V12.6667C14 13.0333 13.8696 13.3473 13.6087 13.6087C13.3478 13.87 13.0338 14.0004 12.6667 14H3.33333C2.96667 14 2.65289 13.8696 2.392 13.6087C2.13111 13.3478 2.00044 13.0338 2 12.6667V3.33333C2 2.96667 2.13067 2.65289 2.392 2.392C2.65333 2.13111 2.96711 2.00044 3.33333 2H11.3333L14 4.66667ZM8 12C8.55556 12 9.02778 11.8056 9.41667 11.4167C9.80556 11.0278 10 10.5556 10 10C10 9.44444 9.80556 8.97222 9.41667 8.58333C9.02778 8.19444 8.55556 8 8 8C7.44444 8 6.97222 8.19444 6.58333 8.58333C6.19444 8.97222 6 9.44444 6 10C6 10.5556 6.19444 11.0278 6.58333 11.4167C6.97222 11.8056 7.44444 12 8 12ZM4 6.66667H10V4H4V6.66667Z"
      fill={color}
    />
	</Svg>
);

const Edit = ({ width = 16, height = 16, color = '#FE724C' }) => (
	<Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M2 11.5V14H4.5L11.8733 6.62668L9.37333 4.12668L2 11.5ZM13.8067 4.69335C13.8685 4.63167 13.9175 4.55841 13.951 4.47776C13.9844 4.39711 14.0016 4.31066 14.0016 4.22335C14.0016 4.13603 13.9844 4.04958 13.951 3.96893C13.9175 3.88828 13.8685 3.81502 13.8067 3.75335L12.2467 2.19335C12.185 2.13154 12.1117 2.08251 12.0311 2.04906C11.9504 2.0156 11.864 1.99838 11.7767 1.99838C11.6894 1.99838 11.6029 2.0156 11.5223 2.04906C11.4416 2.08251 11.3683 2.13154 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
      fill={color}
    />
	</Svg>
);

const Icons = {
	EyeFill, EyeOff, CheckFill,
	CarOutline,
	CatPhone, CatBed, CatToy, CatGames, CatLaptops, ShopCart, Search, Star,
	HomeIcon, Favorite, Cart, UserHome,
	Share, Heart, CartAdd,
	UserProfile, AddressPin, Help, Arrow,
	Calendar, Mail, Phone, Save, Edit,
  };
  
export default Icons;