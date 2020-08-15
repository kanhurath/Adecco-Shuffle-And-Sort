var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        function createDOM(nums) {
            var domText = '';
            nums.forEach(nums => {
                domText = domText + "<div class='num-items'>" + nums + "</div>";
            });
            document.getElementById("results").innerHTML = domText;
        }
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
        createDOM(numbers);        
        document.getElementById("shufflenum").addEventListener("click", (e) => {
            var nums = shuffle(numbers);
            createDOM(nums);
        });
        document.getElementById("sortnum").addEventListener("click", (e) => {
            var nums = numbers.sort(function (a, b) { return a - b });
            createDOM(nums);
        });