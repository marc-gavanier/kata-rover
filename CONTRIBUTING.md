# Guide de Contribution

## 📑 Table des matières

- 📦 [Prérequis](#prérequis)
- 🚀 [Démarrage](#démarrage)
- 🛠️ [Scripts Disponibles](#scripts-disponibles)
- 🤝 [Procédures](#procédures)
- 🏗️ [Construit avec](#construit-avec)
- 🏷️ [Gestion des versions](#gestion-des-versions)

<h2 id="prérequis">📦 Prérequis</h2>

- [Git](https://git-scm.com/) : Système de contrôle de version distribué
- [Node.js](https://nodejs.org/) : Environnement d'exécution pour JavaScript
- [pnpm](https://pnpm.io/) : Gestionnaire de paquets pour les projets Node.js

### Recommandation

> Pour une gestion plus facile de Node.js, envisagez d'utiliser [nvm](https://github.com/nvm-sh/nvm), qui vous permet d'obtenir rapidement et d'utiliser différentes versions de Node.js via la ligne de commande.

<h2 id="démarrage">🚀 Démarrage</h2>

Suivez ces étapes pour configurer le projet :

### 1. Clonez le dépôt

```bash
git clone git@github.com:anct-cartographie-nationale/api-application.git
```

### 2. Installez les dépendances du projet

```bash
cd api-application
pnpm install
```

Une fois ces étapes terminées, vous êtes prêt à commencer à travailler sur le projet ! 🎉

<h2 id="scripts-disponibles">🛠️ Scripts Disponibles</h2>

Ces commandes sont essentielles pour le développement de l'application :

### `pnpm build`

Construit les différentes routes de l'API afin qu'elles soient prêtes pour la production dans le dossier `dist`.

### `pnpm test`

Lance l'exécution de tests avec [Vitest](https://vitest.dev/).

Les tests sont relancés automatiquement à chaque fichier édité.

### `pnpm lint.es`

Effectue une analyse statique du code source du projet dans le dossier `src/`.

### `pnpm lint.commit`

Vérifie la syntaxe de tous les commits effectués depuis le dernier commit commun avec la branche `main`.

### `pnpm lint.staged`

Exécute toutes les analyses statiques sur les fichiers mis dans l'état `staged` avec la commande `git add`.

### `pnpm lint.openapi`

Effectue une analyse statique de la documentation de l'api au format `openAPI`.

### `pnpm prettier`

Corrige les problèmes de syntaxe de tous les fichiers du projet.

### `pnpm build.openapi`

Génère le fichier de spécification `openapi.json` à partir du fichier [.openapirc.json](.openapirc.json) ainsi que tous les éléments de documentation de l'API présents dans les blocs de documentation des fichiers sources.

### `pnpm build.openapi-doc`

Construit un site statique de documentation de l'API à partir du fichier de spécification `openapi.json`. Le fichier prêt à être publié est écrit dans `dist/index.html`.

### `pnpm watch.openapi-doc`

Lance le site de documentation en local, une fois prêt, il est disponible sur http://127.0.0.1:8080/

<h2 id="procédures">🤝 Procédures</h2>

### Branches

- **Branches à jour** : Les branches doivent être créées à partir d'une version à jour de la branche principale.
- **Préfixes conventionnels** : Lors de la création de nouvelles branches, assurez-vous qu'elles sont préfixées par l'une des catégories suivantes : `build/`, `chore/`, `ci/`, `docs/`, `feat/`, `fix/`, `perf/`, `refactor/`, `revert/`, `style/` ou `test/`, en fonction de la nature des modifications. Consultez les [types de commits conventionnels](https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index) pour en savoir plus sur ces catégories.

### Commits

- **Commits Conventionnels** : Les messages de commit doivent suivre la spécification [Commits Conventionnels](https://www.conventionalcommits.org/fr) pour être valides.
- **Commits Signés** : Les commits doivent être signés à l'aide d'une clé GPG. Consultez [About commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) pour plus d'informations sur la configuration.

### Création et publication d'une nouvelle fonctionnalité

1. **Créez une nouvelle branche** : Utilisez `git checkout -b feat/nom-de-la-fonctionnalité-incroyable` pour créer une nouvelle branche pour vos modifications.
2. **Commitez vos modifications** : Effectuez vos modifications et commitez-les avec un message descriptif. Par exemple, `git commit -m "feat: ajoute une fonctionnalité incroyable"`.
3. **Publiez votre branche** : Poussez votre branche de fonctionnalité vers le dépôt distant avec `git push origin feat/nom-de-la-fonctionnalité-incroyable`.
4. **Ouvrez une Pull-Request** : Une fois vos modifications poussées, ouvrez une Pull-Request vers la branche principale. Indiquez des détails sur les modifications et demandez une revue des collaborateurs.

### Déploiement

Lorsqu'une branche est fusionnée avec `main`, cela déclenche automatiquement la mise à jour de l'API en production, ainsi que la mise à jour de la documentation associée.

<h2 id="construit-avec">🏗️ Construit avec</h2>

### Langages & Frameworks

- [TypeScript](https://www.typescriptlang.org/) : le principal langage de programmation utilisé ici, c'est un langage open source qui s'appuie sur JavaScript en ajoutant un typage statique.
- [AWS Lambda](https://aws.amazon.com/fr/lambda/) : l'environnement d'exécution de code "serverless" proposé par AWS, permet d'héberger et de rendre disponible le code des routes de l'API.
- [AWS SDK](https://github.com/aws/aws-sdk-js) : permet d'accéder aux services AWS depuis le code.
  - [DynamoDB](https://aws.amazon.com/fr/dynamodb/) : service de base de données NoSQL de type clé-valeur proposé par AWS.

### Outils

- [Vite](https://vitejs.dev/) : `module bundler` polyvalent pour transformer le code source en code exécutable prêt à être publié.
- [Vitest](https://vitest.dev/) : environnement d'exécution des tests.
- [Eslint](https://eslint.org/) : analyseur statique de code pour JavaScript et TypeScript.
- [Prettier](https://prettier.io/) : formateur de code pour divers langages et syntaxes.
- [Husky](https://typicode.github.io/husky/#/) : vérifications automatiques avant la publication des contributions avec git.
- [Commitlint](https://github.com/conventional-changelog/commitlint) : assure que les messages de commit suivent la spécification [Commits Conventionnels](https://www.conventionalcommits.org/fr/v1.0.0/).
- [Lint-staged](https://github.com/okonet/lint-staged) : applique toutes les vérifications statiques aux fichiers mis dans l'état `staged` dans git.
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) génère automatiquement la spécification OpenAPI à partir des commentaires JSDoc dans le code.
- [Redocly](https://redocly.com/) : validation de la configuration OpenAPI et génération d'un site statique de documentation de l'API.

### Intégration Continue

- [GitHub Actions](https://docs.github.com/fr/actions) : outil intégré à GitHub pour l'intégration continue et le déploiement continu.
  - Les exécutions des workflows sont disponibles sous [l'onglet Actions](https://github.com/anct-cartographie-nationale/api-application/actions).
- Workflows :
  - [Validation de branche](./.github/workflows/validate-feature.yml) : s'exécute sur chaque branche commençant par un préfixe conventionnel. Cela permet de déterminer si le code est prêt à être fusionné dans `main`.
  - [Mise à jour et publication](./.github/workflows/release.yml) : s'exécute sur chaque fusion dans la branche `main`. Il construit et met a jour le code de l'API avant de redéployer l'API. Il publie également un site statique sur GitHub Pages qui contient la documentation de l'API.
    - Utilise l'environnement `github-pages`, créé automatiquement en configurant la source de l'action GitHub à partir de la section `Build and deployment` dans `Settings/Pages`.
- Secrets du dépôt :
  - `AWS_ACCESS_KEY_ID` : Clé d'accès AWS du compte `cartographie-nationale.api.ci`.
  - `AWS_SECRET_ACCESS_KEY` : Secret associé à la clé d'accès à AWS du compte `cartographie-nationale.api.ci`.
  - `AWS_S3_BUCKET` : Identifiant de l'espace sur AWS S3 dans lequel est publié le build des fonctions et le schéma de l'api.
  - `TF_API_TOKEN` : Jeton d'accès à l'API de Terraform Cloud (Team API Token) pour mettre à jour et redéployer l'API.

### Déploiement

#### Sur l'environnement de production

- L'infrastructure de déploiement est décrite avec Terraform dans les dépôts :
  - [Api Infrastructure](https://github.com/anct-cartographie-nationale/api-infrastructure)
  - [Network Infrastructure](https://github.com/anct-cartographie-nationale/network-infrastructure)
- [AWS](https://aws.amazon.com/) est la plateforme de services Cloud proposée par Amazon.
  - Compte de déploiement : `cartographie-nationale.api.ci`
  - Groupe : `publisher.api`
  - Environnement cible : https://cartographie.societenumerique.gouv.fr/api/

#### Documentation

- [GitHub Pages](https://pages.github.com/) : service d'hébergement de sites web statiques de GitHub.
  - Héberge la documentation de l'API : https://anct-cartographie-nationale.github.io/api-application/v0/.

<h2 id="gestion-des-versions">🏷️ Gestion des versions</h2>

Ce projet suit la spécification [Semantic Versioning 2.0.0](https://semver.org/lang/fr/) pour la dénomination des versions, cala garanti un cycle de publication clair et la compatibilité ascendante.
