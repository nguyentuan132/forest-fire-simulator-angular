## 1. Démarrer le serveur Spring Boot (Back-End)

Cela lancera le serveur Spring Boot sur le port 8080. Le front-end pourra alors se connecter à ce serveur pour récupérer les données de la simulation.

## 2. Démarrer l'interface front-end (Angular)

Ouvrez un terminal dans le répertoire du projet front-end.

Exécutez la commande suivante pour démarrer le serveur de développement Angular sur le port par défaut 4200 :

```bash
npm start
```
Cela démarrera l'application front-end sur http://localhost:4200.

## 3. Accéder à l'application
Ouvrez votre navigateur web et accédez à l'URL suivante :

```bash
http://localhost:4200
```

Vous verrez l'interface graphique qui communique avec le back-end. Elle enverra des requêtes à l'API du serveur Spring Boot pour récupérer et afficher les résultats de la simulation.

# Explication de l'interaction
Le front-end envoie une requête HTTP GET à l'API /api/simulation/simulate du back-end pour récupérer les données de simulation. Ces données sont ensuite affichées graphiquement dans l'interface pour visualiser l'évolution du feu dans la forêt selon les paramètres définis dans la configuration du back-end.

![Alt text](https://github.com/nguyentuan132/forest-fire-simulator-angular/blob/main/src/assets/simul.png)


## Fonctionnement des boutons dans l'interface :
### 1. L'utilisateur peut naviguer entre les étapes de la simulation en utilisant les boutons "Précédent" et "Suivant".
### 2. Si l'auto-run est activé, la simulation avancera automatiquement à chaque étape sans avoir besoin de cliquer sur les boutons "Précédent" ou "Suivant".
### 3. L'utilisateur peut réinitialiser la simulation en cliquant sur "Nouvelle Simulation", ce qui commencera une nouvelle série d'événements de simulation.
