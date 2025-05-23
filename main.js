 function hideColor(){
            const elements = document.querySelectorAll('[data-color="bnw"]');
                elements.forEach(elements => {
                    elements.style.display = 'block';
            });
            const color = document.querySelectorAll('[data-color="color"]');
                color.forEach(color => {
                    color.style.display = 'none';
            });
        }
        function hideBNW(){
            const elements = document.querySelectorAll('[data-color="color"]');
                elements.forEach(elements => {
                    elements.style.display = 'block';
            });
            const color = document.querySelectorAll('[data-color="bnw"]');
                color.forEach(color => {
                    color.style.display = 'none';
            });
        }