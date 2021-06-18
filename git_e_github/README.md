# Git

## Configurações iniciais:

`git config --global user.name "NAME"`

`git config --global user.email "EMAIL"`



Salvar credenciais:

`git config --global credential.helper store`

---

## Inicializar:

*Init*:

`git init` 

Mostrar status *(Modified files in working directory)*:

`git status`

Clone:

`git clone URL` 

Diagrama:

![Resumo](https://www.monolitonimbus.com.br/wp-content/uploads/2017/12/git_flow.png)

```
git add FILE
git commit -m "comment"
git push

git fetch
git merge
git pull
```

Mostrar LOG dos *commits* do *current branch*:

`git log`

Reset último *commit*:

`git reset`

---

## *Branches*

Criar novo *branch*:

`git branch NAME`

Retornar um *commit* ou branch:

`git checkout NAME|COMMIT`

Log:
```
git log
git log --oneline
```
*Difference*:

`git diff [first-branch]...[second-branch]`

---

Repositório remoto:

`git remote add origin https://github.com/leonardomigot/projeto.git`

`git push -u origin main`