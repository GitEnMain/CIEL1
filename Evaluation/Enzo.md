## Partie 1 : HTML (10 points)

### QCM (5 points – 0,5 pt/question)

1. Quelle est la signification de HTML ?  
   - [ ] Hyperlinks and Text Markup Language  
   - [X] Hyper Text Markup Language  
   - [ ] Home Tool Markup Language  

2. Quelle balise permet d’afficher le titre d’une page dans l’onglet du navigateur ?  
   - [X] `<head>`  
   - [ ] `<title>`  
   - [ ] `<h1>`  

3. Quelle balise permet d’insérer une image ?  
   - [X] `<img>`  
   - [ ] `<image>`  
   - [ ] `<picture>`  

4. Quelle balise est utilisée pour créer un lien hypertexte ?  
   - [ ] `<a>`  
   - [X ] `<link>`  
   - [ ] `<href>`  

5. Quel attribut est obligatoire dans la balise `<img>` ?  
   - [X] `src`  
   - [ ] `href`  
   - [ ] `alt`  

6. Quelle est la bonne syntaxe pour créer une liste non ordonnée ?  
   - [X] `<ul><li>Élément</li></ul>`  
   - [ ] `<ol><li>Élément</li></ol>`  
   - [ ] `<li><ul>Élément</ul></li>`  

7. La balise `<strong>` sert à :  
   - [X] Mettre le texte en gras  
   - [ ] Souligner le texte  
   - [ ] Centrer le texte  

8. Quelle est la structure minimale correcte d’un document HTML ?  
   - [ ] `<html><body></body></html>`  
   - [X] `<html><head></head><body></body></html>`  
   - [ ] `<body><html></html></body>`  

9. Quelle balise permet d’insérer un commentaire dans le code HTML ?  
   - [ ] `<!-- commentaire -->`  
   - [X] `// commentaire`  
   - [ ] `/* commentaire */`  

10. Quelle balise permet d’insérer un paragraphe ?  
    - [X] `<p>`  
    - [ ] `<text>`  
    - [ ] `<paragraph>`  

---

### Questions rédigées (5 points)

11. (1 pt) Expliquez la différence entre une balise ouvrante et une balise fermante en HTML, avec un exemple.  

> Réponse :  
> Une balise ouvrante permet d'introduire un paragraphe par exemple avec <p> alors que la balise fermante dans ce cas là 
la cloture avec </p>

---

12. (2 pts) Écrivez le code HTML complet d’une page contenant :
- un titre principal "Mon premier site"
- une image `photo.jpg`
- un lien vers `https://example.com` avec le texte "Visitez ce site"

> Réponse :  <Doctype html>
   <head>
             <title> " Mon premier site" <title>
             <img scr= "photo.jpg" /> 
             <link> " https://example.com" 
<link>
   <head>


>  



---

13. (2 pts) Quelle est la différence entre les balises `<div>` et `<span>` ? Donnez un exemple d’utilisation typique pour chacune.  

> Réponse :  
> aucune idée

---

## Partie 2 : Git (10 points)

### QCM (5 points – 0,5 pt/question)

14. Quelle commande initialise un dépôt Git ?  
   - [ ] `git start`  
   - [x] `git init`  
   - [ ] `git create`  

15. Quelle commande permet d’ajouter des fichiers à la zone de préparation (staging area) ?  
   - [X] `git add`  
   - [ ] `git stage`  
   - [ ] `git push`  

16. Quelle commande permet d’enregistrer les changements dans l’historique du dépôt ?  
   - [ ] `git save`  
   - [X] `git commit`  
   - [ ] `git record`  

17. Quelle commande permet de consulter l’historique des commits ?  
   - [ ] `git status`  
   - [ ] `git log`  
   - [X] `git history`  

18. Quelle commande permet de cloner un dépôt distant ?  
   - [ ] `git copy`  
   - [X] `git clone`  
   - [ ] `git pull`  

19. Quelle commande affiche les fichiers modifiés mais non encore commités ?  
   - [X] `git status`  
   - [ ] `git show`  
   - [ ] `git diff`  

20. Quelle commande permet d’envoyer les commits locaux vers le dépôt distant ?  
   - [ ] `git send`  
   - [ ] `git upload`  
   - [X] `git push`  

21. Quelle commande permet de récupérer les modifications du dépôt distant sans les fusionner ?  
   - [ ] `git fetch`  
   - [X] `git pull`  
   - [ ] `git merge`  

22. Quelle commande permet de créer une nouvelle branche nommée `develop` ?  
   - [X] `git branch develop`  
   - [ ] `git create develop`  
   - [ ] `git checkout develop`  

23. Quelle commande permet de changer de branche ?  
   - [X] `git change`  
   - [ ] `git switch`  
   - [ ] `git swap`  

---

### Questions rédigées (5 points)

24. (2 pts) Expliquez la différence entre `git clone`, `git pull`.  

> Réponse : git clone permet de cloner un dépot distant alors que git pull permet de récupérer les dossiers du dépot distant.  
> 

---

25. (1 pt) Quelle est la différence entre un dépôt local et un dépôt distant ?  

> Réponse : par exemple un dépot local est les PC des élèves et le dépot distant est le dépot de celui qui l'a créé 
> 

---

26. (2 pts) Donnez la suite de commandes Git pour :
- créer un dépôt local,  
- y ajouter un fichier `index.html`,  
- enregistrer ce fichier dans l’historique du dépôt avec un message de commit,  
- et envoyer ce dépôt vers un dépôt distant nommé `origin` sur la branche `main`.  

> Réponse :  
> 
git add .
git pull origin main
git commit -m "messaage de commit"
git push 
