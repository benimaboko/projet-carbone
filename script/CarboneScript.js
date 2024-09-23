document.querySelector("#getresult").addEventListener("click", function() {
    let resultText = "";
    const resultatElement = document.getElementById("res");

    // Variables pour stocker les empreintes carbone de chaque catégorie
    let empreinteCarboneTransport = 0;
    let empreinteCarboneRepas = 0;
    let empreinteCarboneElectromenager = 0;
    let empreinteCarboneObjetNumerique = 0;
    let empreinteCarboneFruit = 0;
    let empreinteCarboneLegume = 0;

    // Calcul de l'empreinte carbone pour le transport
    const modeTransport = document.getElementById("modtransport").value;
    const nbreKm = parseFloat(document.getElementById("nbrkm").value);
    const nbrTrajets = parseInt(document.getElementById("nbrtrajet").value);
    const empreinteCarboneBus = 0.113 * nbreKm * nbrTrajets; // Empreinte carbone pour le bus

    switch (modeTransport) {
        case "metro":
            empreinteCarboneTransport = 0.004 * nbreKm * nbrTrajets;
            break;
        case "bus":
            empreinteCarboneTransport = empreinteCarboneBus;
            break;
        case "velo":
        case "pied":
            empreinteCarboneTransport = 0;
            break;
        default:
            console.error("Mode de transport non pris en charge");
            resultText += "Erreur: Mode de transport non pris en charge.\n";
            break;
    }
    
    resultText += "L'empreinte carbone pour votre transport est de : " + empreinteCarboneTransport.toFixed(2) + " kgCO2.\n";
    
    if (modeTransport !== "bus" && modeTransport !== "velo" && modeTransport !== "pied") {
        const equivalentBusTrajets = (empreinteCarboneTransport / empreinteCarboneBus).toFixed(2);
        resultText += "Ce qui équivaut à " + equivalentBusTrajets + " trajets en bus.\n";
    }

    // Calcul de l'empreinte carbone pour les repas
    const typeRepas = document.getElementById("typeRepas").value;
    const nbrRepas = parseInt(document.getElementById("nbrRepas").value);
    const empreinteCarboneRepasReference = 0.5 * nbrRepas; // Empreinte carbone pour repas végétarien

    switch (typeRepas) {
        case "poissonGras":
            empreinteCarboneRepas = 1.1 * nbrRepas;
            break;
        case "poissonBlanc":
            empreinteCarboneRepas = 2 * nbrRepas;
            break;
        case "poulet":
            empreinteCarboneRepas = 1.6 * nbrRepas;
            break;
        case "vegetarien":
            empreinteCarboneRepas = empreinteCarboneRepasReference;
            break;
        default:
            console.error("Type de repas non pris en charge");
            resultText += "Erreur : Type de repas non pris en charge";
            break;
    }
    resultText += "L'empreinte carbone pour vos repas est de : " + empreinteCarboneRepas.toFixed(2) + " kgCO2.\n";
    
    if (typeRepas !== "vegetarien") {
        const equivalentRepasVegetarien = (empreinteCarboneRepas / empreinteCarboneRepasReference).toFixed(2);
        resultText += "Ce qui équivaut à " + equivalentRepasVegetarien + " repas végétariens.\n";
    }

    // Calcul de l'empreinte carbone pour les électroménagers
    const typeElectromenager = document.getElementById("typeElectromenager").value;
    const nbrUtilisations = parseInt(document.getElementById("nbrUtilisations").value);
    const empreinteCarboneBouilloire = 31.64 * nbrUtilisations; // Empreinte carbone pour la bouilloire

    switch (typeElectromenager) {
        case "bouilloire":
            empreinteCarboneElectromenager = empreinteCarboneBouilloire;
            break;
        case "aspirateur":
            empreinteCarboneElectromenager = 47 * nbrUtilisations;
            break;
        case "cafetiereFiltre":
            empreinteCarboneElectromenager = 35.92 * nbrUtilisations;
            break;
        case "fourElectrique":
            empreinteCarboneElectromenager = 75.57 * nbrUtilisations;
            break;
        case "climatisateur":
            empreinteCarboneElectromenager = 109.56 * nbrUtilisations;
            break;
        case "laveVaisselle":
            empreinteCarboneElectromenager = 219.44 * nbrUtilisations;
            break;
        case "laveLinge7g":
            empreinteCarboneElectromenager = 216.93 * nbrUtilisations;
            break;
        default:
            console.error("Type d'électroménager non pris en charge");
            resultText += "Erreur : Type d'électroménager non pris en charge";
            break;
    }
    
    resultText += "L'empreinte carbone pour vos électroménagers est de : " + empreinteCarboneElectromenager.toFixed(2) + " kgCO2.\n";
    
    if (typeElectromenager !== "bouilloire") {
        const equivalentBouilloire = (empreinteCarboneElectromenager / empreinteCarboneBouilloire).toFixed(2);
        resultText += "Ce qui équivaut à " + equivalentBouilloire + " utilisations de bouilloire.\n";
    }

    // Calcul de l'empreinte carbone pour les objets numériques
    const typeObjetNumerique = document.getElementById("typeObjetNumerique").value;
    const nbrHeuresUtilisationObjetNumerique = parseInt(document.getElementById("nbrHeuresUtilisationObjetNumerique").value);
    const empreinteCarboneSmartphone = 0.533 * nbrHeuresUtilisationObjetNumerique; // Empreinte carbone pour le smartphone

    switch (typeObjetNumerique) {
        case "enceinteBluetooth":
            empreinteCarboneObjetNumerique = 1.12 * nbrHeuresUtilisationObjetNumerique;
            break;
        case "montreConnectee":
            empreinteCarboneObjetNumerique = 0.119 * nbrHeuresUtilisationObjetNumerique;
            break;
        case "imprimanteJetEncre":
            empreinteCarboneObjetNumerique = 21.46 * nbrHeuresUtilisationObjetNumerique;
            break;
        case "ordinateurPortable":
            empreinteCarboneObjetNumerique = 27.54 * nbrHeuresUtilisationObjetNumerique;
            break;
        case "ordinateurFixeBureau":
            empreinteCarboneObjetNumerique = 30.21 * nbrHeuresUtilisationObjetNumerique;
            break;
        case "ecran24Pouces":
            empreinteCarboneObjetNumerique = 20.46 * nbrHeuresUtilisationObjetNumerique;
            break;
        case "television40_49Pouces":
            empreinteCarboneObjetNumerique = 62.16 * nbrHeuresUtilisationObjetNumerique;
            break;
        case "smartphone5_5p":
            empreinteCarboneObjetNumerique = empreinteCarboneSmartphone;
            break;
        case "tablette":
            empreinteCarboneObjetNumerique = 7.45 * nbrHeuresUtilisationObjetNumerique;
            break;
        default:
            console.error("Type d'objet numérique non pris en charge");
            break;
    }
    
    resultText += "L'empreinte carbone pour vos objets numériques est de : " + empreinteCarboneObjetNumerique.toFixed(2) + " kgCO2.\n";
    
    if (typeObjetNumerique !== "smartphone5_5p") {
        const equivalentSmartphone = (empreinteCarboneObjetNumerique / empreinteCarboneSmartphone).toFixed(2);
        resultText += "Ce qui équivaut à " + equivalentSmartphone + " heures d'utilisation de smartphone.\n";
    }

    // Calcul de l'empreinte carbone pour les fruits
    const typeFruit = document.getElementById("typeFruit").value;
    const quantiteFruit = parseInt(document.getElementById("quantiteFruit").value);
    const empreinteCarbonePomme = 0.3 * quantiteFruit; // Empreinte carbone pour la pomme

    switch (typeFruit) {
        case "ananas":
            empreinteCarboneFruit = 1.2 * quantiteFruit;
            break;
        case "banane":
            empreinteCarboneFruit = 1.9 * quantiteFruit;
            break;
        case "fruitPassion":
            empreinteCarboneFruit = 0.9 * quantiteFruit;
            break;
        case "mangue":
            empreinteCarboneFruit = 15 * quantiteFruit;
            break;
        case "pomme":
            empreinteCarboneFruit = empreinteCarbonePomme;
            break;
        case "pamplemousse":
            empreinteCarboneFruit = 0.6 * quantiteFruit;
            break;
        default:
            console.error("Type de fruit non pris en charge");
            break;
    }

    resultText += "L'empreinte carbone pour vos fruits est de : " + empreinteCarboneFruit.toFixed(2) + " kgCO2.\n";
    
    if (typeFruit !== "pomme") {
        const equivalentPomme = (empreinteCarboneFruit / empreinteCarbonePomme).toFixed(2);
        resultText += "Ce qui équivaut à " + equivalentPomme + " kg de pommes.\n";
    }

    // Calcul de l'empreinte carbone pour les légumes
    const typeLegume = document.getElementById("typeLegume").value;
    const quantiteLegume = parseInt(document.getElementById("quantiteLegume").value);
    const empreinteCarboneEpinard = 0.3 * quantiteLegume; // Empreinte carbone pour les épinards

    switch (typeLegume) {
    case "asperge":
        empreinteCarboneLegume = 1.4 * quantiteLegume;
        break;
    case "avocat":
        empreinteCarboneLegume = 2.8 * quantiteLegume;
        break;
    case "champignonParis":
        empreinteCarboneLegume = 0.4 * quantiteLegume;
        break;
    case "cresson":
        empreinteCarboneLegume = 0.8 * quantiteLegume;
        break;
    case "endive":
        empreinteCarboneLegume = 0.8 * quantiteLegume;
        break;
    case "epinard":
        empreinteCarboneLegume = empreinteCarboneEpinard;
        break;
    case "fenouil":
        empreinteCarboneLegume = 1 * quantiteLegume;
        break;
    case "navet":
        empreinteCarboneLegume = 0.4 * quantiteLegume;
        break;
    case "oignon":
        empreinteCarboneLegume = 0.4 * quantiteLegume;
        break;
    default:
        console.error("Type de légume non pris en charge");
        break;
    }

    resultText += "L'empreinte carbone pour vos légumes est de : " + empreinteCarboneLegume.toFixed(2) + " kgCO2.\n";
    
    if (typeLegume !== "epinard") {
        const equivalentEpinard = (empreinteCarboneLegume / empreinteCarboneEpinard).toFixed(2);
        resultText += "Ce qui équivaut à " + equivalentEpinard + " kg d'épinards.\n";
    }

    // Afficher le résultat
    resultatElement.textContent = resultText;

    // Générer le graphique
    const data = {
        labels: ["Transport", "Repas", "Électroménager", "Objet Numérique", "Fruit", "Légume"],
        datasets: [{
            label: 'Empreinte Carbone (kgCO2)',
            data: [
                empreinteCarboneTransport, 
                empreinteCarboneRepas, 
                empreinteCarboneElectromenager, 
                empreinteCarboneObjetNumerique, 
                empreinteCarboneFruit, 
                empreinteCarboneLegume
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const carboneChart = new Chart(
        document.getElementById('carboneChart'),
        config
    );
});
