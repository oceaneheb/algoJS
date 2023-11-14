let scoreBanque = 0;
let scoreJoueur = 0;

for (let i=0; i<5; i++) {
    let desBanque = Math.floor(Math.random() * 5);
    let desJoueur = Math.floor(Math.random() * 5);
    if (desJoueur > desBanque) {
        scoreJoueur++
    } else if (desJoueur == desBanque) {
        scoreJoueur += 2;
    } else if (desJoueur < desBanque) {
        scoreBanque ++;
    }
    console.log("Dés : " + desBanque, desJoueur);
    console.log("Scores : " + scoreBanque, scoreJoueur);
}
if (scoreBanque > scoreJoueur) {
    console.log(`Le gagnant est la Banque avec un score de ${scoreBanque}`);
} else {
    console.log(`Le gagnant est le Joueur avec un score de ${scoreJoueur}`);

}