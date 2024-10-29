# AuthentificationJWT

Ce dépôt GitHub contient une solution complète d'authentification basée sur JWT (JSON Web Tokens), divisée en deux parties : un backend `auth-api` et un frontend `auth-app`. Ce projet permet aux utilisateurs de s'inscrire, se connecter, et accéder à des fonctionnalités sécurisées selon leur rôle d'utilisateur.

## Table des matières

- [À propos](#à-propos)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
  - [Prérequis](#prérequis)
  - [Étapes d'installation](#étapes-dinstallation)
    - [Backend (auth-api)](#backend-auth-api)
    - [Frontend (auth-app)](#frontend-auth-app)
- [Configuration](#configuration)
- [Fonctionnalités](#fonctionnalités)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Utilisation](#utilisation)
  - [Démarrer le backend](#démarrer-le-backend)
  - [Démarrer le frontend](#démarrer-le-frontend)
- [Structure des dossiers](#structure-des-dossiers)
- [Améliorations futures](#améliorations-futures)
- [Auteur](#auteur)

## À propos

Ce projet fournit une solution complète d'authentification d'utilisateurs. Le backend utilise Node.js avec Express et MongoDB pour gérer les utilisateurs et générer des tokens JWT. Le frontend est développé avec Angular et permet aux utilisateurs de s'inscrire, de se connecter et de naviguer de manière sécurisée dans l'application.

## Technologies utilisées

- **Frontend** : Angular, Angular Material pour les composants d'interface utilisateur.
- **Backend** : Node.js, Express, MongoDB pour la base de données.
- **Authentification** : JWT pour les sessions sécurisées.

## Structure du projet

Le projet est divisé en deux répertoires principaux, `auth-api` pour le backend et `auth-app` pour le frontend :


- **auth-api** : Gère l'API backend pour la gestion des utilisateurs, l'authentification JWT et les rôles.
- **auth-app** : Contient le frontend en Angular, offrant des formulaires d'inscription, de connexion et des pages sécurisées.

## Installation

### Prérequis

Assurez-vous d'avoir installé :
- Node.js
- MongoDB
- Angular CLI (pour le frontend)

### Étapes d'installation

#### Backend (auth-api)

1. Accédez au dossier `auth-api` :
   ```bash
   cd auth-api
2. Installez les dépendances du backend : 
npm install

#### Frontend  (auth-api)
1.  Accédez au dossier auth-app :
cd auth-app

2.  Installez les dépendances du frontend :

npm install

### Configuration
Backend : Ajoutez les variables d'environnement pour MongoDB, JWT_SECRET, et autres paramètres dans .env.
Frontend : Configurez les paramètres de l'API en fonction de l'URL du backend dans les fichiers Angular appropriés.

### Fonctionnalités
#### Backend
WT Authentification : Création de tokens sécurisés pour les sessions.
Endpoints protégés : Routes protégées avec un middleware d'authentification.
Gestion des rôles : Accès en fonction des rôles utilisateur, tel que 'admin' et 'user'.
#### Frontend
Inscription et Connexion : Formulaires d'authentification utilisant Angular Material.
Feedback utilisateur : Messages d'erreur en cas d'erreur d'authentification ou d'accès restreint.
Navigation sécurisée : Les utilisateurs ne peuvent accéder qu'aux pages autorisées par leur rôle.





