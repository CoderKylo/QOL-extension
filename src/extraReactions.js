{
    let extraReactions = [];
    const reactionIDs = ['', 'like', '', 'funny', 'creative', 'dislike', '', 'agree', 'disagree', 'useful', '', 'hype'];
    const reactionsDB = ['agree', "funny", "useful", "creative", "hype", "dislike", "disagree"];

    chrome.storage.local.get(["storage"], (result) => {
        console.log(result);
        extraReactions = result.storage.reactions;
        console.log(extraReactions);
        addReactions(Array.from(document.getElementsByClassName("sv-rate-menu")));
    });

    function addReactions (elements) {
        if (Array.isArray(elements)) {
            elements.forEach(element => {
            // console.log("we in array for each sv rate menu");
                if (element.innerText != "Remove") {
                    for (let i = 0; i < extraReactions.length; i++) {
                        //console.log("we in array for each reaction");
                        //console.log(element.getElementsByClassName(`sv-rating-type-icon${reactionIDs.indexOf(reactionsDB[i])}`));
                        if (extraReactions[i] && !element.getElementsByClassName(`sv-rating-type-icon${reactionIDs.indexOf(reactionsDB[i])}`).length) {
                            //console.log('in if loop');
                        // console.log('in if for reactions', reactionsDB[i]);
                            let reactionID = reactionIDs.indexOf(reactionsDB[i]);
                            //console.log( reactionID);
                            let reactionDiv = element.querySelector(`.actionBar-action--sv-rate`).cloneNode(true);
                            reactionDiv.classList.add('custom-extra-reaction');
                            //console.log('reactionDiv rating element', reactionDiv.getElementsByClassName('sv-rating-type-icon')[0]);
                            reactionDiv.getElementsByClassName('sv-rating-type-icon')[0].className = `sv-rating-type-icon  sv-rating-type-icon${reactionID} sv-rating-type-icon--sprite sv-rating-type-icon--sprite${reactionID}  sv-rating-type--large`
                            reactionDiv.href = reactionDiv.href.substring(0, reactionDiv.href.length - 1) + reactionID;
                            //console.log(reactionDiv.getElementsByClassName('sv-rating-type-icon  sv-rating-type-icon1 sv-rating-type-icon--sprite sv-rating-type-icon--sprite1  sv-rating-type--large')[0]);
                            element.prepend(reactionDiv);
                        // console.log(reactionDiv);
                            
                        }
                    }
                }
            });
        } else {
            element = elements;
            if (element.innerText != "Remove") {
                for (let i = 0; i < extraReactions.length; i++) {
                    //console.log("we in array for each reaction");
                    //console.log(element.getElementsByClassName(`sv-rating-type-icon${reactionIDs.indexOf(reactionsDB[i])}`));
                    if (extraReactions[i] && !element.getElementsByClassName(`sv-rating-type-icon${reactionIDs.indexOf(reactionsDB[i])}`).length) {
                        //console.log('in if loop');
                    // console.log('in if for reactions', reactionsDB[i]);
                        let reactionID = reactionIDs.indexOf(reactionsDB[i]);
                        //console.log( reactionID);
                        let reactionDiv = element.querySelector(`.actionBar-action--sv-rate`).cloneNode(true);
                        
                        //console.log('reactionDiv rating element', reactionDiv.getElementsByClassName('sv-rating-type-icon')[0]);
                        reactionDiv.getElementsByClassName('sv-rating-type-icon')[0].className = `sv-rating-type-icon  sv-rating-type-icon${reactionID} sv-rating-type-icon--sprite sv-rating-type-icon--sprite${reactionID}  sv-rating-type--large`
                        reactionDiv.href = reactionDiv.href.substring(0, reactionDiv.href.length - 1) + reactionID;
                        //console.log(reactionDiv.getElementsByClassName('sv-rating-type-icon  sv-rating-type-icon1 sv-rating-type-icon--sprite sv-rating-type-icon--sprite1  sv-rating-type--large')[0]);
                        element.prepend(reactionDiv);
                    // console.log(reactionDiv);
                        
                    }
                }
            }
        }
    }

    document.addEventListener("click", (event) => {
        if (event.target.innerText == "View previous comments…") {
            const parentEl = event.target.parentElement.parentElement;
            setTimeout(() => {
                addReactions(Array.from(parentEl.getElementsByClassName('sv-rate-menu')));
            }, 250)
        } /*else if (event.target.innerText == "Remove") {

            let El = event.target.parentElement;

            setTimeout(() => {
                addReactions(El);
                console.log(El);
            }, 1000)
        }*/
    });

    const qu = 'querySelector';
    const queryParent = (s, p) => {
    const q = (x) => document[qu](x);
    const qa = (y) => document[`${qu}All`](y);
    const pa = qa(p);
    (typeof s === 'string') && (s = q(s));
    return [...pa].filter((n) => {
        return (n.contains(s)) ? n : false;
    }).pop();
    };
}