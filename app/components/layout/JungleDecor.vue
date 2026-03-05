<template>
	<div class="jungle-decor pointer-events-none" aria-hidden="true">

		<!-- ===== GAUCHE ===== -->
		<div class="jungle-side jungle-left">
			<svg viewBox="0 0 220 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin slice">
				<defs>
					<linearGradient id="vG1" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00ff88" stop-opacity="1"/>
						<stop offset="60%" stop-color="#00cc6d" stop-opacity="0.7"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0.2"/>
					</linearGradient>
					<linearGradient id="vG2" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00cc6d" stop-opacity="0.7"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0.15"/>
					</linearGradient>
					<linearGradient id="vG3" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00ff88" stop-opacity="0.5"/>
						<stop offset="100%" stop-color="#00cc6d" stop-opacity="0.1"/>
					</linearGradient>
					<linearGradient id="lf1" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stop-color="#001a0e"/>
						<stop offset="35%" stop-color="#003d1f"/>
						<stop offset="70%" stop-color="#005c2e"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0.15"/>
					</linearGradient>
					<linearGradient id="lf2" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stop-color="#000d07"/>
						<stop offset="40%" stop-color="#002a15"/>
						<stop offset="80%" stop-color="#004020"/>
						<stop offset="100%" stop-color="#00cc6d" stop-opacity="0.2"/>
					</linearGradient>
					<linearGradient id="lf3" x1="0" y1="1" x2="1" y2="0">
						<stop offset="0%" stop-color="#001505"/>
						<stop offset="50%" stop-color="#004525"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0.25"/>
					</linearGradient>
					<linearGradient id="bamboo" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stop-color="#002a15"/>
						<stop offset="50%" stop-color="#004d26"/>
						<stop offset="100%" stop-color="#001a0e"/>
					</linearGradient>

					<!-- Clip paths pour nervures feuilles gauche -->
					<clipPath id="clipL1">
						<path d="M0 0 C-20 -10, -45 5, -50 30 C-55 55, -30 65, 0 50 C30 65, 55 55, 50 30 C45 5, 20 -10, 0 0Z"/>
					</clipPath>
					<clipPath id="clipL2">
						<path d="M0 0 C-25 -8, -55 10, -58 40 C-61 70, -30 78, 0 60 C30 78, 61 70, 58 40 C55 10, 25 -8, 0 0Z"/>
					</clipPath>
					<clipPath id="clipL3">
						<path d="M0 0 C-15 20, -60 35, -90 25 C-120 15, -130 -10, -110 -30 C-90 -50, -40 -45, 0 0Z"/>
					</clipPath>
					<clipPath id="clipL4">
						<path d="M0 0 C-18 12, -65 20, -98 10 C-131 0, -140 -22, -120 -44 C-100 -66, -50 -60, 0 0Z"/>
					</clipPath>
					<clipPath id="clipL5">
						<path d="M0 0 C-10 -30, -50 -55, -80 -50 C-110 -45, -125 -20, -115 5 C-105 30, -75 40, -45 35 C-15 30, 0 10, 0 0Z"/>
					</clipPath>
					<clipPath id="clipL6">
						<path d="M0 0 C-12 -25, -55 -48, -85 -44 C-115 -40, -128 -18, -118 8 C-108 34, -72 42, -42 36 C-12 30, 0 8, 0 0Z"/>
					</clipPath>
				</defs>

				<!-- BAMBOUS -->
				<rect x="195" y="0" width="8" height="1000" fill="url(#bamboo)" opacity="0.5" rx="2"/>
				<line x1="195" y1="120" x2="203" y2="120" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="195" y1="240" x2="203" y2="240" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="195" y1="360" x2="203" y2="360" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="195" y1="480" x2="203" y2="480" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="195" y1="600" x2="203" y2="600" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="195" y1="720" x2="203" y2="720" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<rect x="178" y="200" width="5" height="800" fill="url(#bamboo)" opacity="0.3" rx="1"/>
				<line x1="178" y1="320" x2="183" y2="320" stroke="#00ff88" stroke-width="1" opacity="0.3"/>
				<line x1="178" y1="470" x2="183" y2="470" stroke="#00ff88" stroke-width="1" opacity="0.3"/>
				<line x1="178" y1="620" x2="183" y2="620" stroke="#00ff88" stroke-width="1" opacity="0.3"/>

				<!-- LIANES -->
				<path
d="M210 0 C200 60, 160 80, 175 160 C190 240, 145 275, 162 355 C179 435, 135 470, 152 555 C169 640, 125 675, 142 760 C155 830, 130 870, 145 1000"
					stroke="url(#vG1)" stroke-width="4" stroke-linecap="round" fill="none"/>
				<path
d="M185 0 C170 70, 205 130, 182 210 C159 290, 195 345, 170 425 C145 505, 182 555, 158 640 C134 725, 170 770, 148 900"
					stroke="url(#vG2)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
				<path
d="M165 0 C155 50, 180 110, 160 185 C140 260, 168 315, 148 395 C128 475, 155 520, 136 605"
					stroke="url(#vG3)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
				<path
d="M175 160 C170 195, 165 220, 168 260 C171 300, 163 330, 167 375"
					stroke="#00ff88" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>
				<path
d="M162 355 C157 390, 153 415, 156 460 C159 505, 151 535, 155 580"
					stroke="#00cc6d" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.4"/>
				<path
d="M152 555 C148 590, 144 620, 147 665"
					stroke="#00ff88" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.35"/>
				<path
d="M142 760 C136 800, 130 840, 134 890 C138 940, 128 970, 132 1000"
					stroke="#00cc6d" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.45"/>

				<!-- FEUILLE 1 - petite ovale -->
				<g transform="translate(155, 130) rotate(35)">
					<path d="M0 0 C-8 -5, -22 2, -25 15 C-28 28, -15 32, 0 25 C15 32, 28 28, 25 15 C22 2, 8 -5, 0 0Z" fill="url(#lf2)" opacity="0.7"/>
					<g clip-path="url(#clipL1)" transform="scale(0.5)">
						<path d="M0 0 L0 25" stroke="#00ff88" stroke-width="1.2" opacity="0.5"/>
						<path d="M0 8 L-10 20 M0 8 L10 20 M0 17 L-8 25 M0 17 L8 25" stroke="#00ff88" stroke-width="0.7" opacity="0.4"/>
					</g>
				</g>

				<!-- FEUILLE 2 - bananier haut -->
				<g transform="translate(175, 85)">
					<animateTransform attributeName="transform" type="rotate" values="-2,175,85;2,175,85;-2,175,85" dur="4s" repeatCount="indefinite"/>
					<path d="M175 85 C160 105, 115 120, 85 110 C55 100, 45 75, 65 55 C85 35, 135 40, 175 85Z" fill="url(#lf1)" opacity="0.9"/>
					<clipPath id="clipLban1">
						<path d="M175 85 C160 105, 115 120, 85 110 C55 100, 45 75, 65 55 C85 35, 135 40, 175 85Z"/>
					</clipPath>
					<g clip-path="url(#clipLban1)">
						<path d="M175 85 L65 75" stroke="#00ff88" stroke-width="1" opacity="0.6"/>
						<path d="M155 80 L140 115 M135 72 L118 108 M115 65 L98 102 M95 58 L80 92" stroke="#00ff88" stroke-width="0.6" opacity="0.4"/>
					</g>
				</g>

				<!-- FEUILLE 3 - monstera -->
				<g transform="translate(180, 195) rotate(-15)">
					<animateTransform attributeName="transform" type="rotate" values="-18,180,195;-12,180,195;-18,180,195" dur="5.5s" repeatCount="indefinite"/>
					<path d="M180 195 C170 165, 130 140, 100 145 C70 150, 55 175, 65 200 C75 225, 105 235, 135 230 C165 225, 180 205, 180 195Z" fill="url(#lf2)" opacity="0.85"/>
					<!-- Découpes monstera -->
					<path d="M150 230 C145 215, 155 205, 155 205" fill="#0b0e14" opacity="0.85"/>
					<path d="M120 232 C112 216, 122 204, 123 204" fill="#0b0e14" opacity="0.85"/>
					<clipPath id="clipLmon1">
						<path d="M180 195 C170 165, 130 140, 100 145 C70 150, 55 175, 65 200 C75 225, 105 235, 135 230 C165 225, 180 205, 180 195Z"/>
					</clipPath>
					<g clip-path="url(#clipLmon1)">
						<path d="M180 195 L62 198" stroke="#00ff88" stroke-width="1" opacity="0.6"/>
						<path d="M158 192 L148 155 M135 188 L130 150 M112 184 L110 148 M90 180 L90 150" stroke="#00ff88" stroke-width="0.6" opacity="0.35"/>
					</g>
				</g>

				<!-- FEUILLE 4 - bananier milieu -->
				<g transform="translate(168, 340) rotate(10)">
					<animateTransform attributeName="transform" type="rotate" values="7,168,340;14,168,340;7,168,340" dur="6s" repeatCount="indefinite"/>
					<path d="M168 340 C148 355, 100 365, 68 355 C36 345, 28 322, 48 300 C68 278, 118 284, 168 340Z" fill="url(#lf3)" opacity="0.88"/>
					<clipPath id="clipLban2">
						<path d="M168 340 C148 355, 100 365, 68 355 C36 345, 28 322, 48 300 C68 278, 118 284, 168 340Z"/>
					</clipPath>
					<g clip-path="url(#clipLban2)">
						<path d="M168 340 L38 325" stroke="#00ff88" stroke-width="1.2" opacity="0.55"/>
						<path d="M145 337 L130 368 M122 330 L108 362 M100 322 L88 354 M78 315 L68 347" stroke="#00ff88" stroke-width="0.65" opacity="0.38"/>
					</g>
				</g>

				<!-- FEUILLE 5 - palmier -->
				<g transform="translate(200, 460) rotate(-20)">
					<animateTransform attributeName="transform" type="rotate" values="-24,200,460;-17,200,460;-24,200,460" dur="7s" repeatCount="indefinite"/>
					<path d="M200 460 C192 440, 170 390, 145 360 C120 330, 95 340, 100 365 C105 390, 140 415, 180 450 C195 460, 200 465, 200 460Z" fill="url(#lf1)" opacity="0.8"/>
					<clipPath id="clipLpal1">
						<path d="M200 460 C192 440, 170 390, 145 360 C120 330, 95 340, 100 365 C105 390, 140 415, 180 450 C195 460, 200 465, 200 460Z"/>
					</clipPath>
					<g clip-path="url(#clipLpal1)">
						<path d="M200 460 L100 365" stroke="#00ff88" stroke-width="1" opacity="0.5"/>
					</g>
				</g>

				<!-- FEUILLE 6 - monstera bas -->
				<g transform="translate(172, 580) rotate(5)">
					<animateTransform attributeName="transform" type="rotate" values="2,172,580;8,172,580;2,172,580" dur="4.8s" repeatCount="indefinite"/>
					<path d="M172 580 C160 555, 117 532, 87 536 C57 540, 44 562, 54 588 C64 614, 100 622, 130 616 C160 610, 172 588, 172 580Z" fill="url(#lf2)" opacity="0.82"/>
					<path d="M144 616 C138 598, 150 583, 150 583" fill="#0b0e14" opacity="0.85"/>
					<path d="M114 620 C106 602, 118 586, 119 586" fill="#0b0e14" opacity="0.85"/>
					<clipPath id="clipLmon2">
						<path d="M172 580 C160 555, 117 532, 87 536 C57 540, 44 562, 54 588 C64 614, 100 622, 130 616 C160 610, 172 588, 172 580Z"/>
					</clipPath>
					<g clip-path="url(#clipLmon2)">
						<path d="M172 580 L46 585" stroke="#00ff88" stroke-width="1" opacity="0.55"/>
						<path d="M150 577 L140 536 M126 571 L120 530 M104 565 L100 528" stroke="#00ff88" stroke-width="0.6" opacity="0.32"/>
					</g>
				</g>

				<!-- FEUILLE 7 - bananier bas -->
				<g transform="translate(185, 740) rotate(-8)">
					<animateTransform attributeName="transform" type="rotate" values="-11,185,740;-5,185,740;-11,185,740" dur="5s" repeatCount="indefinite"/>
					<path d="M185 740 C167 752, 120 760, 87 750 C54 740, 45 718, 65 696 C85 674, 135 680, 185 740Z" fill="url(#lf3)" opacity="0.85"/>
					<clipPath id="clipLban3">
						<path d="M185 740 C167 752, 120 760, 87 750 C54 740, 45 718, 65 696 C85 674, 135 680, 185 740Z"/>
					</clipPath>
					<g clip-path="url(#clipLban3)">
						<path d="M185 740 L55 718" stroke="#00ff88" stroke-width="1.1" opacity="0.5"/>
						<path d="M163 736 L148 768 M140 728 L126 760 M118 720 L106 752 M96 713 L86 744" stroke="#00ff88" stroke-width="0.65" opacity="0.35"/>
					</g>
				</g>

				<!-- PETITES FEUILLES intermédiaires -->
				<g transform="translate(148, 430) rotate(-40)">
					<path d="M0 0 C-8 -5, -22 2, -25 15 C-28 28, -15 32, 0 25 C15 32, 28 28, 25 15 C22 2, 8 -5, 0 0Z" fill="url(#lf1)" opacity="0.65"/>
					<g clip-path="url(#clipL1)" transform="translate(0,0) scale(0.5)">
						<path d="M0 0 L0 25" stroke="#00ff88" stroke-width="1.2" opacity="0.4"/>
					</g>
				</g>
				<g transform="translate(160, 660) rotate(20)">
					<path d="M0 0 C-8 -5, -22 2, -25 15 C-28 28, -15 32, 0 25 C15 32, 28 28, 25 15 C22 2, 8 -5, 0 0Z" fill="url(#lf3)" opacity="0.68"/>
					<g clip-path="url(#clipL1)" transform="scale(0.5)">
						<path d="M0 0 L0 25" stroke="#00ff88" stroke-width="1.2" opacity="0.4"/>
					</g>
				</g>

				<!-- RACINES -->
				<path d="M185 900 C175 850, 155 830, 140 870 C125 910, 135 960, 120 1000" stroke="#00cc6d" stroke-width="2" opacity="0.4" fill="none" stroke-linecap="round"/>
				<path d="M200 920 C210 880, 195 850, 185 880 C175 910, 180 960, 170 1000" stroke="#00ff88" stroke-width="1.5" opacity="0.3" fill="none" stroke-linecap="round"/>
				<path d="M175 940 C165 900, 148 880, 138 910 C128 940, 138 975, 125 1000" stroke="#00cc6d" stroke-width="1.2" opacity="0.25" fill="none" stroke-linecap="round"/>

				<!-- LUCIOLES -->
				<circle cx="165" cy="110" r="2.5" fill="#00ff88">
					<animate attributeName="opacity" values="1;0.1;1" dur="2.3s" repeatCount="indefinite"/>
					<animate attributeName="r" values="2.5;1.5;2.5" dur="2.3s" repeatCount="indefinite"/>
				</circle>
				<circle cx="148" cy="255" r="2" fill="#00ff88">
					<animate attributeName="opacity" values="0.8;0.05;0.8" dur="3.5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="172" cy="390" r="3" fill="#00ff88">
					<animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.7s" repeatCount="indefinite"/>
					<animate attributeName="r" values="3;1.5;3" dur="1.7s" repeatCount="indefinite"/>
				</circle>
				<circle cx="155" cy="495" r="1.8" fill="#00ff88">
					<animate attributeName="opacity" values="0.7;0.1;0.7" dur="4.2s" repeatCount="indefinite"/>
				</circle>
				<circle cx="168" cy="610" r="2.2" fill="#00ff88">
					<animate attributeName="opacity" values="0.9;0.15;0.9" dur="2.8s" repeatCount="indefinite"/>
				</circle>
				<circle cx="145" cy="730" r="2" fill="#00ff88">
					<animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.1s" repeatCount="indefinite"/>
				</circle>
				<circle cx="178" cy="830" r="2.5" fill="#00ff88">
					<animate attributeName="opacity" values="0.85;0.2;0.85" dur="2s" repeatCount="indefinite"/>
				</circle>
				<circle cx="140" cy="310" r="1.5" fill="#ff2d78">
					<animate attributeName="opacity" values="0.6;0.05;0.6" dur="5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="160" cy="550" r="1.5" fill="#ff2d78">
					<animate attributeName="opacity" values="0.5;0.05;0.5" dur="3.8s" repeatCount="indefinite"/>
				</circle>
			</svg>
		</div>

		<!-- ===== DROITE ===== -->
		<div class="jungle-side jungle-right">
			<svg viewBox="0 0 220 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin slice">
				<defs>
					<linearGradient id="vGR1" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00ff88" stop-opacity="1"/>
						<stop offset="60%" stop-color="#00cc6d" stop-opacity="0.7"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0.2"/>
					</linearGradient>
					<linearGradient id="vGR2" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00cc6d" stop-opacity="0.7"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0.15"/>
					</linearGradient>
					<linearGradient id="vGR3" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#00ff88" stop-opacity="0.5"/>
						<stop offset="100%" stop-color="#00cc6d" stop-opacity="0.1"/>
					</linearGradient>
					<linearGradient id="lfR1" x1="1" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#001a0e"/>
						<stop offset="35%" stop-color="#003d1f"/>
						<stop offset="70%" stop-color="#005c2e"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0.15"/>
					</linearGradient>
					<linearGradient id="lfR2" x1="1" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#000d07"/>
						<stop offset="40%" stop-color="#002a15"/>
						<stop offset="80%" stop-color="#004020"/>
						<stop offset="100%" stop-color="#00cc6d" stop-opacity="0.2"/>
					</linearGradient>
					<linearGradient id="lfR3" x1="1" y1="1" x2="0" y2="0">
						<stop offset="0%" stop-color="#001505"/>
						<stop offset="50%" stop-color="#004525"/>
						<stop offset="100%" stop-color="#00ff88" stop-opacity="0.25"/>
					</linearGradient>
					<linearGradient id="bambooR" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stop-color="#001a0e"/>
						<stop offset="50%" stop-color="#004d26"/>
						<stop offset="100%" stop-color="#002a15"/>
					</linearGradient>
				</defs>

				<!-- BAMBOUS -->
				<rect x="17" y="0" width="8" height="1000" fill="url(#bambooR)" opacity="0.5" rx="2"/>
				<line x1="17" y1="120" x2="25" y2="120" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="17" y1="240" x2="25" y2="240" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="17" y1="360" x2="25" y2="360" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="17" y1="480" x2="25" y2="480" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="17" y1="600" x2="25" y2="600" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<line x1="17" y1="720" x2="25" y2="720" stroke="#00ff88" stroke-width="1.5" opacity="0.4"/>
				<rect x="37" y="150" width="5" height="850" fill="url(#bambooR)" opacity="0.3" rx="1"/>
				<line x1="37" y1="290" x2="42" y2="290" stroke="#00ff88" stroke-width="1" opacity="0.3"/>
				<line x1="37" y1="440" x2="42" y2="440" stroke="#00ff88" stroke-width="1" opacity="0.3"/>
				<line x1="37" y1="590" x2="42" y2="590" stroke="#00ff88" stroke-width="1" opacity="0.3"/>

				<!-- LIANES -->
				<path
d="M10 0 C20 60, 60 80, 45 160 C30 240, 75 275, 58 355 C41 435, 85 470, 68 555 C51 640, 95 675, 78 760 C65 830, 90 870, 75 1000"
					stroke="url(#vGR1)" stroke-width="4" stroke-linecap="round" fill="none"/>
				<path
d="M35 0 C50 70, 15 130, 38 210 C61 290, 25 345, 50 425 C75 505, 38 555, 62 640 C86 725, 50 770, 72 900"
					stroke="url(#vGR2)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
				<path
d="M55 0 C65 50, 40 110, 60 185 C80 260, 52 315, 72 395 C92 475, 65 520, 84 605"
					stroke="url(#vGR3)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
				<path
d="M45 160 C50 195, 55 220, 52 260 C49 300, 57 330, 53 375"
					stroke="#00ff88" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>
				<path
d="M58 355 C63 390, 67 415, 64 460 C61 505, 69 535, 65 580"
					stroke="#00cc6d" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.4"/>
				<path
d="M68 555 C72 590, 76 620, 73 665"
					stroke="#00ff88" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.35"/>
				<path
d="M78 760 C84 800, 90 840, 86 890 C82 940, 92 970, 88 1000"
					stroke="#00cc6d" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.45"/>

				<!-- FEUILLE R1 - bananier haut -->
				<g transform="translate(45, 85)">
					<animateTransform attributeName="transform" type="rotate" values="2,45,85;-2,45,85;2,45,85" dur="4.5s" repeatCount="indefinite"/>
					<path d="M45 85 C60 105, 105 120, 135 110 C165 100, 175 75, 155 55 C135 35, 85 40, 45 85Z" fill="url(#lfR1)" opacity="0.9"/>
					<clipPath id="clipRban1">
						<path d="M45 85 C60 105, 105 120, 135 110 C165 100, 175 75, 155 55 C135 35, 85 40, 45 85Z"/>
					</clipPath>
					<g clip-path="url(#clipRban1)">
						<path d="M45 85 L155 75" stroke="#00ff88" stroke-width="1" opacity="0.6"/>
						<path d="M65 80 L80 115 M85 72 L102 108 M105 65 L122 102 M125 58 L140 92" stroke="#00ff88" stroke-width="0.6" opacity="0.4"/>
					</g>
				</g>

				<!-- FEUILLE R2 - monstera -->
				<g transform="translate(40, 195) rotate(15)">
					<animateTransform attributeName="transform" type="rotate" values="18,40,195;12,40,195;18,40,195" dur="5s" repeatCount="indefinite"/>
					<path d="M40 195 C50 165, 90 140, 120 145 C150 150, 165 175, 155 200 C145 225, 115 235, 85 230 C55 225, 40 205, 40 195Z" fill="url(#lfR2)" opacity="0.85"/>
					<path d="M70 230 C75 215, 65 205, 65 205" fill="#0b0e14" opacity="0.85"/>
					<path d="M100 232 C108 216, 98 204, 97 204" fill="#0b0e14" opacity="0.85"/>
					<clipPath id="clipRmon1">
						<path d="M40 195 C50 165, 90 140, 120 145 C150 150, 165 175, 155 200 C145 225, 115 235, 85 230 C55 225, 40 205, 40 195Z"/>
					</clipPath>
					<g clip-path="url(#clipRmon1)">
						<path d="M40 195 L158 198" stroke="#00ff88" stroke-width="1" opacity="0.6"/>
						<path d="M62 192 L72 155 M85 188 L90 150 M108 184 L110 148 M130 180 L130 150" stroke="#00ff88" stroke-width="0.6" opacity="0.35"/>
					</g>
				</g>

				<!-- FEUILLE R3 - bananier milieu -->
				<g transform="translate(52, 340) rotate(-10)">
					<animateTransform attributeName="transform" type="rotate" values="-13,52,340;-7,52,340;-13,52,340" dur="6.5s" repeatCount="indefinite"/>
					<path d="M52 340 C72 355, 120 365, 152 355 C184 345, 192 322, 172 300 C152 278, 102 284, 52 340Z" fill="url(#lfR3)" opacity="0.88"/>
					<clipPath id="clipRban2">
						<path d="M52 340 C72 355, 120 365, 152 355 C184 345, 192 322, 172 300 C152 278, 102 284, 52 340Z"/>
					</clipPath>
					<g clip-path="url(#clipRban2)">
						<path d="M52 340 L182 325" stroke="#00ff88" stroke-width="1.2" opacity="0.55"/>
						<path d="M75 337 L90 368 M98 330 L112 362 M120 322 L132 354 M142 315 L152 347" stroke="#00ff88" stroke-width="0.65" opacity="0.38"/>
					</g>
				</g>

				<!-- FEUILLE R4 - palmier -->
				<g transform="translate(20, 460) rotate(20)">
					<animateTransform attributeName="transform" type="rotate" values="24,20,460;17,20,460;24,20,460" dur="7.5s" repeatCount="indefinite"/>
					<path d="M20 460 C28 440, 50 390, 75 360 C100 330, 125 340, 120 365 C115 390, 80 415, 40 450 C25 460, 20 465, 20 460Z" fill="url(#lfR1)" opacity="0.8"/>
					<clipPath id="clipRpal1">
						<path d="M20 460 C28 440, 50 390, 75 360 C100 330, 125 340, 120 365 C115 390, 80 415, 40 450 C25 460, 20 465, 20 460Z"/>
					</clipPath>
					<g clip-path="url(#clipRpal1)">
						<path d="M20 460 L120 365" stroke="#00ff88" stroke-width="1" opacity="0.5"/>
					</g>
				</g>

				<!-- FEUILLE R5 - monstera bas -->
				<g transform="translate(48, 580) rotate(-5)">
					<animateTransform attributeName="transform" type="rotate" values="-8,48,580;-2,48,580;-8,48,580" dur="4.3s" repeatCount="indefinite"/>
					<path d="M48 580 C60 555, 103 532, 133 536 C163 540, 176 562, 166 588 C156 614, 120 622, 90 616 C60 610, 48 588, 48 580Z" fill="url(#lfR2)" opacity="0.82"/>
					<path d="M76 616 C82 598, 70 583, 70 583" fill="#0b0e14" opacity="0.85"/>
					<path d="M106 620 C114 602, 102 586, 101 586" fill="#0b0e14" opacity="0.85"/>
					<clipPath id="clipRmon2">
						<path d="M48 580 C60 555, 103 532, 133 536 C163 540, 176 562, 166 588 C156 614, 120 622, 90 616 C60 610, 48 588, 48 580Z"/>
					</clipPath>
					<g clip-path="url(#clipRmon2)">
						<path d="M48 580 L174 585" stroke="#00ff88" stroke-width="1" opacity="0.55"/>
						<path d="M70 577 L80 536 M94 571 L100 530 M116 565 L120 528" stroke="#00ff88" stroke-width="0.6" opacity="0.32"/>
					</g>
				</g>

				<!-- FEUILLE R6 - bananier bas -->
				<g transform="translate(35, 740) rotate(8)">
					<animateTransform attributeName="transform" type="rotate" values="11,35,740;5,35,740;11,35,740" dur="5.2s" repeatCount="indefinite"/>
					<path d="M35 740 C53 752, 100 760, 133 750 C166 740, 175 718, 155 696 C135 674, 85 680, 35 740Z" fill="url(#lfR3)" opacity="0.85"/>
					<clipPath id="clipRban3">
						<path d="M35 740 C53 752, 100 760, 133 750 C166 740, 175 718, 155 696 C135 674, 85 680, 35 740Z"/>
					</clipPath>
					<g clip-path="url(#clipRban3)">
						<path d="M35 740 L165 718" stroke="#00ff88" stroke-width="1.1" opacity="0.5"/>
						<path d="M57 736 L72 768 M80 728 L94 760 M102 720 L114 752 M124 713 L134 744" stroke="#00ff88" stroke-width="0.65" opacity="0.35"/>
					</g>
				</g>

				<!-- PETITES FEUILLES -->
				<g transform="translate(65, 130) rotate(-35)">
					<path d="M0 0 C8 -5, 22 2, 25 15 C28 28, 15 32, 0 25 C-15 32, -28 28, -25 15 C-22 2, -8 -5, 0 0Z" fill="url(#lfR2)" opacity="0.7"/>
				</g>
				<g transform="translate(72, 430) rotate(40)">
					<path d="M0 0 C8 -5, 22 2, 25 15 C28 28, 15 32, 0 25 C-15 32, -28 28, -25 15 C-22 2, -8 -5, 0 0Z" fill="url(#lfR1)" opacity="0.65"/>
				</g>
				<g transform="translate(60, 660) rotate(-20)">
					<path d="M0 0 C8 -5, 22 2, 25 15 C28 28, 15 32, 0 25 C-15 32, -28 28, -25 15 C-22 2, -8 -5, 0 0Z" fill="url(#lfR3)" opacity="0.68"/>
				</g>

				<!-- RACINES -->
				<path d="M35 900 C45 850, 65 830, 80 870 C95 910, 85 960, 100 1000" stroke="#00cc6d" stroke-width="2" opacity="0.4" fill="none" stroke-linecap="round"/>
				<path d="M20 920 C10 880, 25 850, 35 880 C45 910, 40 960, 50 1000" stroke="#00ff88" stroke-width="1.5" opacity="0.3" fill="none" stroke-linecap="round"/>
				<path d="M45 940 C55 900, 72 880, 82 910 C92 940, 82 975, 95 1000" stroke="#00cc6d" stroke-width="1.2" opacity="0.25" fill="none" stroke-linecap="round"/>

				<!-- LUCIOLES -->
				<circle cx="55" cy="110" r="2.5" fill="#00ff88">
					<animate attributeName="opacity" values="1;0.1;1" dur="2.7s" repeatCount="indefinite"/>
					<animate attributeName="r" values="2.5;1.5;2.5" dur="2.7s" repeatCount="indefinite"/>
				</circle>
				<circle cx="72" cy="255" r="2" fill="#00ff88">
					<animate attributeName="opacity" values="0.8;0.05;0.8" dur="3.2s" repeatCount="indefinite"/>
				</circle>
				<circle cx="48" cy="390" r="3" fill="#00ff88">
					<animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.9s" repeatCount="indefinite"/>
					<animate attributeName="r" values="3;1.5;3" dur="1.9s" repeatCount="indefinite"/>
				</circle>
				<circle cx="65" cy="495" r="1.8" fill="#00ff88">
					<animate attributeName="opacity" values="0.7;0.1;0.7" dur="4.5s" repeatCount="indefinite"/>
				</circle>
				<circle cx="52" cy="610" r="2.2" fill="#00ff88">
					<animate attributeName="opacity" values="0.9;0.15;0.9" dur="3s" repeatCount="indefinite"/>
				</circle>
				<circle cx="75" cy="730" r="2" fill="#00ff88">
					<animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.6s" repeatCount="indefinite"/>
				</circle>
				<circle cx="42" cy="830" r="2.5" fill="#00ff88">
					<animate attributeName="opacity" values="0.85;0.2;0.85" dur="2.2s" repeatCount="indefinite"/>
				</circle>
				<circle cx="80" cy="310" r="1.5" fill="#ff2d78">
					<animate attributeName="opacity" values="0.6;0.05;0.6" dur="4.8s" repeatCount="indefinite"/>
				</circle>
				<circle cx="60" cy="550" r="1.5" fill="#ff2d78">
					<animate attributeName="opacity" values="0.5;0.05;0.5" dur="3.5s" repeatCount="indefinite"/>
				</circle>
			</svg>
		</div>
	</div>
</template>

<style scoped>
.jungle-decor {
	position: fixed;
	inset: 0;
	z-index: 0;
	pointer-events: none;
}

.jungle-side {
	position: absolute;
	top: 0;
	width: 220px;
	height: 100%;
	overflow: hidden;
}

.jungle-left {
	left: 0;
	-webkit-mask-image: linear-gradient(to right, black 55%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%);
	mask-image: linear-gradient(to right, black 55%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%);
	-webkit-mask-composite: intersect;
	mask-composite: intersect;
}

.jungle-right {
	right: 0;
	-webkit-mask-image: linear-gradient(to left, black 55%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%);
	mask-image: linear-gradient(to left, black 55%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%);
	-webkit-mask-composite: intersect;
	mask-composite: intersect;
}

.jungle-side svg {
	width: 100%;
	height: 100%;
}

@media (max-width: 1400px) {
	.jungle-side {
		width: 160px;
		opacity: 0.75;
	}
}

@media (max-width: 1100px) {
	.jungle-side {
		width: 100px;
		opacity: 0.5;
	}
}

@media (max-width: 900px) {
	.jungle-decor {
		display: none;
	}
}
</style>
