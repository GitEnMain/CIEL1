# 🎓 BTS CIEL – Référentiel de compétences de l'évaluation
## Lien avec l’évaluation « HTML & Git »

---

## 🧩 Compétences mobilisées

| Code compétence | Libellé | Lien avec l’évaluation |
|:----------------|:---------|:----------------------|
| **C1.1.1** | Analyser un besoin exprimé et identifier les composants logiciels nécessaires | Compréhension du rôle du HTML dans la structure d’une application web. |
| **C1.1.2** | Identifier les technologies nécessaires à la réalisation d’une solution applicative | Identification du HTML comme langage de structuration et de Git comme outil de versionnage. |
| **C1.2.1** | Développer des éléments d’interface utilisateur | Le HTML permet de structurer l’interface graphique d’un site web (balises, liens, images, listes). |
| **C1.3.1** | Utiliser un système de gestion de versions pour suivre l’évolution d’une application | L’évaluation sur les commandes Git (init, add, commit, push, etc.) vérifie directement cette compétence. |
| **C1.3.2** | Collaborer à la construction d’une application en utilisant des outils adaptés | L’usage de Git est essentiel pour la collaboration en développement logiciel. |

---

## 📚 Connaissances et savoirs associés

| Domaine | Référence du référentiel | Contenu évalué |
|:---------|:--------------------------|:----------------|
| **Langages de description de pages web** | S2.2.2 | Structure d’un document HTML, balises, attributs, hiérarchie, syntaxe, bonnes pratiques. |
| **Outils et environnements de développement** | S2.3.1 | Utilisation d’un système de gestion de versions (Git). |
| **Outils de travail collaboratif** | S2.3.2 | Commandes Git pour le partage et la synchronisation des sources. |
| **Cycle de vie d’un développement** | S2.4.1 | Notion de dépôt local/distant, commits, suivi des modifications. |
| **Pratiques professionnelles du développement** | S3.1.1 | Respect des standards du web, documentation et structuration claire du code. |

---

## 🎓 Objectifs pédagogiques de l’évaluation

- ✅ Vérifier la maîtrise des **bases du langage HTML** : structure, balises, attributs, liens, images, listes, etc.  
- ✅ Évaluer la **compréhension du fonctionnement d’un dépôt Git** : initialisation, ajout, commit, push/pull/fetch.  
- ✅ Faire le lien entre **le développement individuel** (HTML local) et **le travail collaboratif** (Git).  
- ✅ Initier aux **bonnes pratiques de versionnage** pour un futur travail en équipe.  

---

## 🧠 Bloc U6 – Réalisation d’un développement d’application

| Bloc | Intitulé | Compétence associée |
|------|-----------|--------------------|
| **U6-A** | Développement d’éléments d’interface utilisateur | Structuration et création de pages HTML simples. |
| **U6-B** | Gestion des versions d’une application | Utilisation de Git pour versionner, sauvegarder et synchroniser le code source. |
| **U6-C** | Collaboration au développement d’une application | Compréhension du flux Git (clone, pull, push, branches). |

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 🧠 Évaluation – HTML & Git
**Durée : 1h — Note /20**

---

## Partie 1 : HTML (10 points)

### QCM (5 points – 0,5 pt/question)

1. Quelle est la signification de HTML ?  
   - [ ] Hyperlinks and Text Markup Language  
   - [x] **Hyper Text Markup Language**  
   - [ ] Home Tool Markup Language  

2. Quelle balise permet d’afficher le titre d’une page dans l’onglet du navigateur ?  
   - [ ] `<head>`  
   - [x] `<title>`  
   - [ ] `<h1>`  

3. Quelle balise permet d’insérer une image ?  
   - [x] `<img>`  
   - [ ] `<image>`  
   - [ ] `<picture>`  

4. Quelle balise est utilisée pour créer un lien hypertexte ?  
   - [x] `<a>`  
   - [ ] `<link>`  
   - [ ] `<href>`  

5. Quel attribut est obligatoire dans la balise `<img>` ?  
   - [x] `src`  
   - [ ] `href`  
   - [ ] `alt`  

6. Quelle est la bonne syntaxe pour créer une liste non ordonnée ?  
   - [x] `<ul><li>Élément</li></ul>`  
   - [ ] `<ol><li>Élément</li></ol>`  
   - [ ] `<li><ul>Élément</ul></li>`  

7. La balise `<strong>` sert à :  
   - [x] Mettre le texte en gras  
   - [ ] Souligner le texte  
   - [ ] Centrer le texte  

8. Quelle est la structure minimale correcte d’un document HTML ?  
   - [ ] `<html><body></body></html>`  
   - [x] `<html><head></head><body></body></html>`  
   - [ ] `<body><html></html></body>`  

9. Quelle balise permet d’insérer un commentaire dans le code HTML ?  
   - [x] `<!-- commentaire -->`  
   - [ ] `// commentaire`  
   - [ ] `/* commentaire */`  

10. Quelle balise permet d’insérer un paragraphe ?  
    - [x] `<p>`  
    - [ ] `<text>`  
    - [ ] `<paragraph>`  

---

### Questions rédigées (5 points)

11. (1 pt) Expliquez la différence entre une balise ouvrante et une balise fermante en HTML, avec un exemple.  
> Une balise ouvrante marque le début d’un élément (`<p>`), et une balise fermante marque sa fin (`</p>`).  
> Exemple : `<p>Bonjour</p>`  

---

12. (2 pts) Écrivez le code HTML complet d’une page contenant :
- un titre principal "Mon premier site"
- une image `photo.jpg`
- un lien vers `https://example.com` avec le texte "Visitez ce site"

> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Mon premier site</title>
> </head>
> <body>
>     <h1>Mon premier site</h1>
>     <img src="photo.jpg" alt="Photo">
>     <a href="https://example.com">Visitez ce site</a>
> </body>
> </html>
> ```

---

13. (2 pts) Quelle est la différence entre les balises `<div>` et `<span>` ? Donnez un exemple d’utilisation typique pour chacune.  
> `<div>` est un conteneur de bloc, utilisé pour structurer une page (sections, zones).  
> `<span>` est un conteneur en ligne, utilisé pour styliser une portion de texte sans saut de ligne.  
> Exemple :  
> ```html
> <div class="section">Contenu</div>
> <p>Bonjour <span class="important">le monde</span></p>
> ```

---

## Partie 2 : Git (10 points)

### QCM (5 points – 0,5 pt/question)

14. Quelle commande initialise un dépôt Git ?  
   - [ ] `git start`  
   - [x] `git init`  
   - [ ] `git create`  

15. Quelle commande permet d’ajouter des fichiers à la zone de préparation (staging area) ?  
   - [x] `git add`  
   - [ ] `git stage`  
   - [ ] `git push`  

16. Quelle commande permet d’enregistrer les changements dans l’historique du dépôt ?  
   - [ ] `git save`  
   - [x] `git commit`  
   - [ ] `git record`  

17. Quelle commande permet de consulter l’historique des commits ?  
   - [ ] `git status`  
   - [x] `git log`  
   - [ ] `git history`  

18. Quelle commande permet de cloner un dépôt distant ?  
   - [ ] `git copy`  
   - [x] `git clone`  
   - [ ] `git pull`  

19. Quelle commande affiche les fichiers modifiés mais non encore commités ?  
   - [x] `git status`  
   - [ ] `git show`  
   - [ ] `git diff`  

20. Quelle commande permet d’envoyer les commits locaux vers le dépôt distant ?  
   - [ ] `git send`  
   - [ ] `git upload`  
   - [x] `git push`  

21. Quelle commande permet de récupérer les modifications du dépôt distant sans les fusionner ?  
   - [x] `git fetch`  
   - [ ] `git pull`  
   - [ ] `git merge`  

22. Quelle commande permet de créer une nouvelle branche nommée `develop` ?  
   - [x] `git branch develop`  
   - [ ] `git create develop`  
   - [ ] `git checkout develop`  

23. Quelle commande permet de changer de branche ?  
   - [ ] `git change`  
   - [x] `git switch`  
   - [ ] `git swap`  

---

### Questions rédigées (5 points)

24. (2 pts) Expliquez la différence entre `git clone`, `git pull` et `git fetch`.  
> `git clone` crée une copie complète d’un dépôt distant sur ta machine.  
> `git fetch` télécharge les nouvelles données sans les fusionner.  
> `git pull` fait à la fois un `fetch` et une fusion automatique.  

---

25. (1 pt) Quelle est la différence entre un dépôt local et un dépôt distant ?  
> Le dépôt local est sur ton ordinateur, le dépôt distant est hébergé sur un serveur (ex : GitHub).  

---

26. (2 pts) Donnez la suite de commandes Git pour :
- créer un dépôt local,  
- y ajouter un fichier `index.html`,  
- enregistrer ce fichier dans l’historique du dépôt avec un message de commit,  
- et envoyer ce dépôt vers un dépôt distant nommé `origin` sur la branche `main`.  

> ```bash
> git init
> git add index.html
> git commit -m "Ajout du fichier index.html"
> git remote add origin <url_du_depot>
> git push -u origin main
> ```

---

## Barème indicatif

| Partie | Contenu | Points |
|:-------|:---------|:-------:|
| HTML QCM | Questions 1 à 10 | 5 |
| HTML Rédigées | Questions 11 à 13 | 5 |
| Git QCM | Questions 14 à 23 | 5 |
| Git Rédigées | Questions 24 à 26 | 5 |
| **Total** |  | **/20** |
