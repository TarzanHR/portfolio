import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// Nettoyer les données existantes
	await prisma.project.deleteMany({});
	await prisma.skill.deleteMany({});
	await prisma.experience.deleteMany({});
	await prisma.user.deleteMany({});

	// Créer un utilisateur de test
	const user1 = await prisma.user.create({
		data: {
			email: 'test@example.com',
			name: 'Test_user',
		},
	});

	// Projets réels de Leny Guilmin
	const project1 = await prisma.project.create({
		data: {
			slug: 'pokemon-deck-builder',
			titleFr: 'Application Pokémon Deck Builder - Vue.js',
			titleEn: 'Pokémon Deck Builder Application - Vue.js',
			descriptionFr:
				'Application web complète en Vue.js pour la création et la gestion de decks Pokémon',
			descriptionEn:
				'Complete Vue.js web application for creating and managing Pokémon decks',
			contentFr: `Développement d'une application web complète en Vue.js pour la création et la gestion de decks Pokémon, suivant les meilleures pratiques d'architecture.

Caractéristiques principales :
- Gestion complète des decks Pokémon
- Système d'authentification sécurisé
- Interface utilisateur moderne et responsive
- Intégration avec une API REST
- Système de stockage local

Architecture Vue.js :
- Organisation en composants réutilisables
- Gestion d'état centralisée avec Vuex
- Navigation avec Vue Router
- Pages distinctes pour chaque fonctionnalité
- Composants modulaires et indépendants`,
			contentEn: `Development of a complete Vue.js web application for creating and managing Pokémon decks, following best architecture practices.

Main features:
- Complete Pokémon deck management
- Secure authentication system
- Modern and responsive user interface
- Integration with REST API
- Local storage system

Vue.js architecture:
- Organization into reusable components
- Centralized state management with Vuex
- Navigation with Vue Router
- Separate pages for each feature
- Modular and independent components`,
			image: 'https://i.ibb.co/LXbrZVTv/projet-vuejs.png',
			images: JSON.stringify([
				{
					url: 'https://i.ibb.co/1tD5kky7/visualisationdeck.png',
					caption:
						'Visualisation des decks Pokémon avec interface moderne',
				},
				{
					url: 'https://i.ibb.co/k28dXQs9/creerdeck.png',
					caption:
						'Interface de création de deck avec sélection de cartes',
				},
			]),
			demoUrl: null,
			githubUrl: null,
			technologies: JSON.stringify(['Vue.js', 'TypeScript', 'REST API']),
			featured: true,
			order: 1,
		},
	});

	const project2 = await prisma.project.create({
		data: {
			slug: 'gestion-supermarche-pyqt',
			titleFr: 'Gestion de Supermarché - PyQt',
			titleEn: 'Supermarket Management - PyQt',
			descriptionFr:
				'Interface graphique en PyQt6 pour la gestion optimisée des rayons et des étagères dans un supermarché',
			descriptionEn:
				'PyQt6 graphical interface for optimized management of aisles and shelves in a supermarket',
			contentFr: `Développement d'une interface graphique complète en PyQt6 pour la gestion optimisée des rayons et des étagères dans un supermarché.

Caractéristiques principales :
- Gestion complète des informations du magasin
- Système de grille flexible (0x0 à 50x50)
- Gestion des fonctions et des rayons
- Optimisation des parcours
- Interface utilisateur intuitive

Fonctionnalités :
- Configuration des informations du magasin (nom, adresse, plan)
- Système de grille personnalisable
- Gestion des fonctions (chemins, entrées, étagères)
- Gestion des rayons avec couleurs
- Attribution automatique des produits
- Optimisation des parcours clients`,
			contentEn: `Development of a complete PyQt6 graphical interface for optimized management of aisles and shelves in a supermarket.

Main features:
- Complete store information management
- Flexible grid system (0x0 to 50x50)
- Functions and aisle management
- Route optimization
- Intuitive user interface

Features:
- Store information configuration (name, address, plan)
- Customizable grid system
- Function management (paths, entrances, shelves)
- Aisle management with colors
- Automatic product assignment
- Customer route optimization`,
			image: 'https://i.ibb.co/Vp0fyqxr/projet-pyqt.jpg',
			images: JSON.stringify([
				{
					url: 'https://i.ibb.co/39Y1Stng/info.png',
					caption: 'Configuration des informations du magasin',
				},
				{
					url: 'https://i.ibb.co/QFznXwRT/create-grid.png',
					caption: 'Création de la grille du magasin',
				},
				{
					url: 'https://i.ibb.co/rKbb9nys/function.png',
					caption:
						'Gestion des fonctions (chemins, entrées, étagères)',
				},
				{
					url: 'https://i.ibb.co/dsL4wwDf/rayon.png',
					caption: 'Gestion des rayons avec couleurs',
				},
				{
					url: 'https://i.ibb.co/wNF8c6SR/etagere.png',
					caption: 'Configuration des étagères',
				},
				{
					url: 'https://i.ibb.co/qLSxgNH1/produits-To-Etagere.png',
					caption: 'Attribution des produits aux étagères',
				},
			]),
			demoUrl: null,
			githubUrl: null,
			technologies: JSON.stringify([
				'PyQt6',
				'Python',
				'Dijkstra Algorithm',
				'UI Design',
				'Optimization',
			]),
			featured: true,
			order: 2,
		},
	});

	const project3 = await prisma.project.create({
		data: {
			slug: 'minecraft-app-flutter',
			titleFr: 'Application Minecraft - Flutter',
			titleEn: 'Minecraft Application - Flutter',
			descriptionFr:
				"Application mobile Flutter pour la recherche d'informations sur Minecraft",
			descriptionEn:
				'Flutter mobile application for searching Minecraft information',
			contentFr: `Développement d'une application mobile Flutter pour la recherche d'informations sur Minecraft, intégrant une API personnalisée.

Caractéristiques principales :
- Recherche d'informations sur les blocs
- Recherche des recettes de craft
- Support des différentes versions de Minecraft
- Stockage local des données
- Interface utilisateur responsive

Architecture technique :
- Frontend Flutter avec Dart
- Backend Node.js avec package Minecraft
- API personnalisée
- State Management avec Provider

Librairies utilisées :
- Dio pour les requêtes HTTP
- Provider pour la gestion d'état
- Package Minecraft pour l'API`,
			contentEn: `Development of a Flutter mobile application for searching Minecraft information, integrating a custom API.

Main features:
- Block information search
- Crafting recipe search
- Support for different Minecraft versions
- Local data storage
- Responsive user interface

Technical architecture:
- Flutter frontend with Dart
- Node.js backend with Minecraft package
- Custom API
- State Management with Provider

Libraries used:
- Dio for HTTP requests
- Provider for state management
- Minecraft package for API`,
			image: 'https://i.ibb.co/ZRv1CFnD/flutter.png',
			demoUrl: null,
			githubUrl: null,
			technologies: JSON.stringify([
				'Flutter',
				'Dart',
				'Node.js',
				'TypeScript',
				'REST API',
				'Dio',
				'Provider',
			]),
			featured: false,
			order: 3,
		},
	});

	const project4 = await prisma.project.create({
		data: {
			slug: 'node-buster-javafx',
			titleFr: 'Node Buster - JavaFX',
			titleEn: 'Node Buster - JavaFX',
			descriptionFr:
				"Jeu de tir développé en Java avec JavaFX et système de gestion d'événements avancé",
			descriptionEn:
				'Shooting game developed in Java with JavaFX and advanced event management system',
			contentFr: `Node Buster est un jeu de tir développé en Java avec JavaFX. Le jeu implémente un système de gestion d'événements et de graphisme avancé pour créer une expérience de jeu fluide et réactive.

Composants Principaux :
- Position : Gestion des coordonnées des entités
- Shade : Gestion des couleurs et effets visuels
- LimitedLifespan : Gestion de la durée de vie des entités
- AlphaDecay : Effet de disparition progressive
- BoxShape/CircleShape : Formes graphiques des entités
- BoxCollider : Détection des collisions
- Target : Gestion des cibles et points
- Bullet : Gestion des projectiles
- Spawner : Gestion de la génération d'entités

Systèmes Principaux :
- AlphaDecaySystem : Gestion des effets de disparition
- BoxShapeRenderer : Rendu des formes graphiques
- BulletCollisionSystem : Détection des collisions
- SimpleBoxSpawnerSystem : Génération des cibles
- Score System : Gestion du système de score`,
			contentEn: `Node Buster is a shooting game developed in Java with JavaFX. The game implements an advanced event management and graphics system to create a smooth and responsive gaming experience.

Main Components:
- Position: Entity coordinate management
- Shade: Color and visual effects management
- LimitedLifespan: Entity lifespan management
- AlphaDecay: Progressive disappearance effect
- BoxShape/CircleShape: Entity graphic shapes
- BoxCollider: Collision detection
- Target: Target and point management
- Bullet: Projectile management
- Spawner: Entity generation management

Main Systems:
- AlphaDecaySystem: Disappearance effects management
- BoxShapeRenderer: Graphic shape rendering
- BulletCollisionSystem: Collision detection
- SimpleBoxSpawnerSystem: Target generation
- Score System: Score system management`,
			demoUrl: null,
			githubUrl: null,
			technologies: JSON.stringify([
				'Java',
				'JavaFX',
				'Game',
				'Event Management',
				'Graphics',
			]),
			featured: false,
			order: 4,
		},
	});

	const project5 = await prisma.project.create({
		data: {
			slug: 'tic-tac-toe-network',
			titleFr: 'Tic-Tac-Toe Network (T3N)',
			titleEn: 'Tic-Tac-Toe Network (T3N)',
			descriptionFr:
				'Jeu du morpion en réseau développé en C avec sockets TCP/IP',
			descriptionEn:
				'Network tic-tac-toe game developed in C with TCP/IP sockets',
			contentFr: `Projet de développement d'un jeu du morpion en réseau, implémenté en C avec des sockets TCP/IP.

Objectifs :
- Initiation aux communications client/serveur
- Manipulation des sockets en TCP/IP
- Travail en équipe
- Développement d'applications communicantes complexes

Architecture progressive (V0 à V4) :

Version 0 : Base de communication
- Client (joueur X) et serveur (joueur O)
- Communication basique avec grille de jeu

Version 1 : Règles du jeu
- Implémentation des règles du morpion
- Système de victoire et de match nul

Version 2 : Multijoueur
- Deux clients jouent entre eux
- Serveur comme arbitre

Version 3 : Spectateurs
- Support des clients observateurs
- Transmission des mouvements aux spectateurs

Version 4 : Multisalles
- Gestion de plusieurs parties simultanées
- Organisation des joueurs par partie`,
			contentEn: `Network tic-tac-toe game development project, implemented in C with TCP/IP sockets.

Objectives:
- Introduction to client/server communications
- TCP/IP socket manipulation
- Teamwork
- Development of complex communicating applications

Progressive architecture (V0 to V4):

Version 0: Communication base
- Client (player X) and server (player O)
- Basic communication with game grid

Version 1: Game rules
- Implementation of tic-tac-toe rules
- Victory and draw system

Version 2: Multiplayer
- Two clients play against each other
- Server as referee

Version 3: Spectators
- Observer client support
- Movement transmission to spectators

Version 4: Multi-rooms
- Management of multiple simultaneous games
- Player organization by game`,
			image: 'https://i.ibb.co/pBn98Jm9/debut-partie.png',
			images: JSON.stringify([
				{
					url: 'https://i.ibb.co/pBn98Jm9/debut-partie.png',
					caption:
						"Début d'une partie avec la grille vide et les joueurs prêts à commencer",
				},
				{
					url: 'https://i.ibb.co/cK2wpN7d/finpartie.png',
					caption:
						"Fin d'une partie avec un joueur victorieux et l'affichage du gagnant",
				},
				{
					url: 'https://i.ibb.co/ymsVSmBj/exemple-code.png',
					caption: 'Exemple de code C pour le Tic Tac Toe Network',
				},
			]),
			demoUrl: null,
			githubUrl: null,
			technologies: JSON.stringify([
				'C',
				'Sockets',
				'TCP/IP',
				'Networking',
				'Multiplayer',
			]),
			featured: false,
			order: 5,
		},
	});

	const project6 = await prisma.project.create({
		data: {
			slug: 'api-pokemon-nodejs',
			titleFr: 'API Pokémon - Node.js',
			titleEn: 'Pokémon API - Node.js',
			descriptionFr:
				'API REST complète pour la gestion des Pokémon avec authentification JWT',
			descriptionEn:
				'Complete REST API for Pokémon management with JWT authentication',
			contentFr: `Développement d'une API REST complète pour la gestion des Pokémon et des utilisateurs, avec un système d'authentification sécurisé.

Caractéristiques principales :
- Gestion complète des Pokémon (CRUD)
- Système d'authentification JWT
- Gestion des utilisateurs
- Système d'attaques pour les Pokémon
- Documentation API avec Swagger
- Tests unitaires avec Jest
- Couverture de tests complète

Technologies utilisées :
- Node.js pour le backend
- Express pour le framework
- Prisma pour la base de données
- JWT pour l'authentification
- Swagger pour la documentation
- Jest pour les tests

Architecture :
- API REST
- Sécurité avec JWT
- Documentation complète
- Tests unitaires
- Base de données Prisma`,
			contentEn: `Development of a complete REST API for managing Pokémon and users, with a secure authentication system.

Main features:
- Complete Pokémon management (CRUD)
- JWT authentication system
- User management
- Attack system for Pokémon
- API documentation with Swagger
- Unit tests with Jest
- Full test coverage

Technologies used:
- Node.js for backend
- Express for framework
- Prisma for database
- JWT for authentication
- Swagger for documentation
- Jest for testing

Architecture:
- REST API
- Security with JWT
- Complete documentation
- Unit tests
- Prisma database`,
			image: 'https://i.ibb.co/JwdTHbFD/base-de-donnee.png',
			images: JSON.stringify([
				{
					url: 'https://i.ibb.co/JwdTHbFD/base-de-donnee.png',
					caption:
						'Structure de la base de données avec les collections pour les Pokémon, les utilisateurs et les attaques',
				},
				{
					url: 'https://i.ibb.co/QvsLFVcD/exemplecode.png',
					caption:
						"Exemple de code implémentant les routes et les contrôleurs de l'API",
				},
				{
					url: 'https://i.ibb.co/84YBVKY9/fullcoverage.png',
					caption:
						'Couverture complète des tests avec Jest, garantissant la qualité du code',
				},
			]),
			demoUrl: null,
			githubUrl: null,
			technologies: JSON.stringify([
				'Node.js',
				'TypeScript',
				'Express',
				'JWT',
				'Prisma',
				'Swagger',
				'Jest',
			]),
			featured: true,
			order: 6,
		},
	});

	const project7 = await prisma.project.create({
		data: {
			slug: 'skyrage',
			titleFr: 'Skyrage - Jeu Isométrique 2D/3D',
			titleEn: 'Skyrage - 2D/3D Isometric Game',
			descriptionFr:
				"Jeu isométrique 2D/3D développé sur Godot où deux camps (Enfer et Paradis) s'affrontent avec trois modes de jeu : JcJ, Joueur vs IA, et IA vs IA",
			descriptionEn:
				'2D/3D isometric game developed on Godot where two factions (Hell and Heaven) battle in three game modes: PvP, Player vs AI, and AI vs AI',
			contentFr: `Skyrage est un jeu isométrique 2D/3D développé sur le moteur Godot. L'objectif principal est de détruire la base ennemie en déployant stratégiquement ses unités.

Deux camps s'affrontent :
- ⚔️ Enfer
- 😇 Paradis

Chaque camp dispose de 3 unités aux caractéristiques distinctes.

Modes de jeu :
- Joueur contre Joueur (JcJ) : affrontement entre deux joueurs humains
- Joueur contre IA : un joueur humain affronte une intelligence artificielle
- IA contre IA : deux intelligences artificielles s'affrontent automatiquement

Mécaniques de jeu :
- Objets qui apparaissent aléatoirement sur la map
- Effets aléatoires (bonus / malus) sur les unités
- Stratégie de déploiement et de positionnement
- Destruction de la base ennemie comme objectif principal

Développement :
- Moteur : Godot
- Style graphique : isométrique 2D/3D
- IA comportementale pour les modes solo et IA vs IA`,
			contentEn: `Skyrage is a 2D/3D isometric game developed on the Godot engine. The main objective is to destroy the enemy base by strategically deploying units.

Two factions face off:
- ⚔️ Hell
- 😇 Heaven

Each faction has 3 units with distinct characteristics.

Game modes:
- Player vs Player (PvP): two human players face off
- Player vs AI: a human player faces an artificial intelligence
- AI vs AI: two AIs battle automatically

Game mechanics:
- Items spawn randomly on the map
- Random effects (bonuses / maluses) on units
- Deployment and positioning strategy
- Destroying the enemy base as the main objective

Development:
- Engine: Godot
- Visual style: 2D/3D isometric
- Behavioral AI for solo and AI vs AI modes`,
			image: 'https://i.ibb.co/jPg3MKjc/skyrage-gameplay.png',
			images: JSON.stringify([
				{
					url: 'https://i.ibb.co/DDMWrkjf/skyrage-menu.png',
					caption: 'Menu principal de Skyrage',
				},
				{
					url: 'https://i.ibb.co/r2LMj4Tc/skyrage-mode-de-jeu.png',
					caption:
						'Sélection du mode de jeu (JcJ, Joueur vs IA, IA vs IA)',
				},
				{
					url: 'https://i.ibb.co/jPg3MKjc/skyrage-gameplay.png',
					caption:
						'Gameplay isométrique avec les deux camps en confrontation',
				},
				{
					url: 'https://i.ibb.co/27MvsVQw/skyrage-credit.png',
					caption: 'Page de crédits',
				},
			]),
			demoUrl: null,
			githubUrl: null,
			technologies: JSON.stringify([
				'Godot',
				'GDScript',
				'Artificial Intelligence',
				'2D Game',
				'Isometric',
			]),
			featured: true,
			order: 7,
		},
	});

	console.log('Seed done!');
	console.log({
		user1,
		project1,
		project2,
		project3,
		project4,
		project5,
		project6,
		project7,
	});
}

main()
	.catch((e) => {
		console.error('Error when running seed', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
