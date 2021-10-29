 const shuffleNodes = (type) => {
        const list = document.getElementById("nodeData")
        let nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        const currentNodeData = nodes.slice(0);
        nodes = shuffleData({ shuffleType: type, currentNodeData });
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }
    //#region Sorting and Shufflling Numbers
    const shuffleData = ({ shuffleType = "", currentNodeData }) => {
        switch (shuffleType) {
            case "SHUFFLE":
                const shuffledData = currentNodeData.sort(() => Math.random() - 0.5) 
                return shuffledData;
              
            case "SORT":
                const sortedData = currentNodeData.sort((firstNumber, secondNumber) => +firstNumber.innerText - +secondNumber.innerText)
                return sortedData;

            default:
                break;
        }
    }
    //#endregion