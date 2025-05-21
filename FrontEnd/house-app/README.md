# House App

Une application web moderne développée avec Angular pour la gestion immobilière.

## Description

House App est une application web développée avec Angular qui permet de gérer et visualiser des propriétés immobilières. L'application utilise Bootstrap pour le design et offre une interface utilisateur moderne et responsive.

## Rapport Technique

### 1. Vue d'ensemble du projet

House App est une application web moderne développée avec Angular, conçue pour la gestion et la visualisation de propriétés immobilières. L'application utilise une architecture moderne basée sur les composants standalone d'Angular et intègre Bootstrap pour l'interface utilisateur.

### 2. Architecture technique

#### 2.1 Stack technologique
- **Framework principal** : Angular 19.2.0
- **Interface utilisateur** : Bootstrap 5.3.6
- **Icônes** : Bootstrap Icons 1.13.1
- **Gestion des états** : RxJS 7.8.0
- **Langage** : TypeScript 5.7.2

#### 2.2 Structure du projet
```
house-app/
├── src/
│   ├── app/
│   │   ├── components/         # Composants de l'application
│   │   ├── services/          # Services Angular
│   │   ├── interfaces/        # Définitions des types
│   │   └── app.component.*    # Composant racine
│   ├── styles.css             # Styles globaux
│   └── index.html             # Point d'entrée HTML
```

### 3. Composants principaux

#### 3.1 Modules fonctionnels
1. **House List** (`house-list/`)
   - Affichage du catalogue des propriétés
   - Interface de visualisation des biens immobiliers

2. **House Create** (`house-create/`)
   - Formulaire de création de nouvelles propriétés
   - Gestion des données immobilières

3. **Predict Form** (`predict-form/`)
   - Interface de prédiction de prix
   - Analyse des données immobilières

4. **Recommendation List** (`recommendation-list/`)
   - Système de recommandations
   - Affichage des suggestions personnalisées

#### 3.2 Services
- **House Service** (`house.service.ts`)
  - Gestion des données immobilières
  - Communication avec l'API
  - Logique métier pour les propriétés

### 4. Fonctionnalités principales

1. **Gestion des propriétés**
   - Création de nouvelles propriétés
   - Visualisation du catalogue
   - Mise à jour des informations

2. **Système de prédiction**
   - Analyse des prix
   - Prédictions basées sur les données

3. **Recommandations**
   - Suggestions personnalisées
   - Filtrage intelligent

### 5. Points forts techniques

1. **Architecture moderne**
   - Utilisation des composants standalone
   - Structure modulaire et maintenable
   - Séparation claire des responsabilités

2. **Interface utilisateur**
   - Design responsive avec Bootstrap
   - Expérience utilisateur optimisée
   - Interface moderne et intuitive

3. **Performance**
   - Chargement optimisé des composants
   - Gestion efficace des états
   - Architecture scalable

### 6. Recommandations pour le développement futur

1. **Améliorations techniques**
   - Implémentation de tests unitaires supplémentaires
   - Ajout de documentation technique détaillée
   - Optimisation des performances

2. **Nouvelles fonctionnalités**
   - Système d'authentification
   - Gestion des favoris
   - Filtres avancés de recherche

3. **Maintenance**
   - Mise à jour régulière des dépendances
   - Suivi des bonnes pratiques Angular
   - Documentation continue

## Installation et Utilisation

### Prérequis

- Node.js (version recommandée : 18.x ou supérieure)
- npm (généralement installé avec Node.js)
- Angular CLI (version 19.x)

### Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
cd house-app
```

2. Installez les dépendances :
```bash
npm install
```

### Développement

Pour lancer le serveur de développement :

```bash
ng serve
```

L'application sera accessible à l'adresse `http://localhost:4200/`.

### Build

Pour construire l'application pour la production :

```bash
ng build
```

Les fichiers de build seront générés dans le dossier `dist/`.

### Tests

Pour exécuter les tests unitaires :

```bash
ng test
```

## Scripts disponibles

- `ng serve` : Lance le serveur de développement
- `ng build` : Construit l'application pour la production
- `ng test` : Lance les tests unitaires
- `ng build --watch` : Construit l'application en mode watch

## Contribution

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Métriques techniques

- **Taille du projet** : Structure modulaire et bien organisée
- **Complexité** : Architecture claire et maintenable
- **Maintenabilité** : Code bien structuré et documenté
- **Évolutivité** : Architecture permettant des extensions futures

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
