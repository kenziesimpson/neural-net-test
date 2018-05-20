const trainingData = [
    {
        input: "Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram; multa quoque et bello passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae.",
        output: { latin : 1 }
    }, {
        input: "Also, we’ll be storing our training data as plain text, not as the encoded data that we’ll ultimately be feeding into our A.I. - you’ll thank me for this later. So we’ll need another function that will apply the previously mentioned encoding function to our training data, selectively converting the text into encoded characters, and returning an array of training data that will play nicely with Brain.js",
        output: { english : 1 }
    }, {
        input: "An updated version of the world's best-selling grammar book. This version includes an eBook which has the same grammar explanations and exercises found in the printed book, plus other great features. You can listen to all of the example sentences from the book, record your answers to exercises, highlight text, bookmark pages and add your own personal notes.",
        output: { english : 1 }
    }, {
        input: "Natio est omnis Gallorum admodum dedita religionibus, atque ob eam causam, qui sunt adfecti gravioribus morbis quique in proeliis periculisque versantur, aut pro victimis homines immolant aut se immolaturos vovent administrisque ad ea sacrificia druidibus utuntur, quod, pro vita hominis nisi hominis vita reddatur, non posse deorum immortalium numen placari arbitrantur, publiceque eiusdem generis habent instituta sacrificia. Alii immani magnitudine simulacra habent, quorum contexta viminibus membra vivis hominibus complent; quibus succensis circumventi flamma exanimantur homines. Supplicia eorum qui in furto aut in latrocinio aut aliqua noxia sint comprehensi gratiora dis immortalibus esse arbitrantur; sed, cum eius generis copia defecit, etiam ad innocentium supplicia descendunt.",
        output: { latin : 1 }
    }
]