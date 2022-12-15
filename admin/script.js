let allInputs = (() => {


    var Moviedata = function(gameValue, aboutValue, publisherValue, platformValue, imageValue) {
        this.gameValue = gameValue;
        this.aboutValue = aboutValue;
        this.publisherValue = publisherValue;
        this.platformValue = platformValue;
        this.imageValue = imageValue;
    };

    // creating object
    let Dominput = {
        game : '#game',
        about : '#about',
        publishers : '#publishers',
        platforms : '#platforms',
        imageurl : '#imageurl',
        tablebody : '.table_body'
    };

    return {
        DOMfields : () => {
            return {
                gameInput : document.querySelector(Dominput.game),
                aboutInput : document.querySelector(Dominput.about),
                publishersInput : document.querySelector(Dominput.publishers),
                platformsInput : document.querySelector(Dominput.platforms),
                imageurlInput : document.querySelector(Dominput.imageurl),
                tablebody : document.querySelector(Dominput.tablebody)
            }
        },

        ADDdatatoScreen : (gameValue, aboutValue, publisherValue, platformValue, imageValue) => {
            let HTML, newData,val1, val2, val3, val4;
                gameValue.length <= 15 ? val1 = gameValue : val1 = gameValue.substring(0, 15) + '...';
                aboutValue.length <= 15 ? val2 = aboutValue : val2 = aboutValue.substring(0, 15) + '...';
                publisherValue.length <= 15 ? val3 = publisherValue : val3 = publisherValue.substring(0, 15) + '...';
                platformValue.length <= 15 ? val4 = platformValue : val4 = platformValue.substring(0, 15) + '...';
            HTML = `
                    <div class="data_tb">
                        <div class="field">
                            <div class="field_content">
                                <img class="imgcircle" src="${imageValue}" />
                            </div>
                        </div>
                        <div class="field">
                            <div class="field_content">${val1}</div>
                        </div>
                        <div class="field">
                            <div class="field_content">${val2}</div>
                        </div>
                        <div class="field">
                            <div class="field_content">${val3}</div>
                        </div>
                        <div class="field">
                            <div class="field_content">${val4}</div>
                        </div>
                        <div class="field">
                            <div class="field_content"><i class="fas fa-trash-alt"></i></div>
                        </div>
                    </div>
                    `;
                    // <i class="fas fa-pencil-alt"></i>
            document.querySelector('.table_body').innerHTML +=HTML;
            document.querySelector(Dominput.game).value = '';
            document.querySelector(Dominput.about).value = '';
            document.querySelector(Dominput.publishers).value = '';
            document.querySelector(Dominput.platforms).value = '';
            document.querySelector(Dominput.imageurl).value = '';

            newData = new Moviedata(imageValue,gameValue,aboutValue,publisherValue,platformValue);
            // console.log(dataDB);
            let LocalDB = JSON.parse(localStorage.getItem('LocalDB'));
            if(LocalDB === null){
                dataDB = []
            }else{
                dataDB = LocalDB;
            }
            
            dataDB.push(newData);
            localStorage.setItem('LocalDB', JSON.stringify(dataDB));
        },

        

        ParsedatafromDB : () => {
            let HTML,val1, val2, val3, val4, LocalDB;
            HTML = '';
            LocalDB = JSON.parse(localStorage.getItem('LocalDB'));
            if(LocalDB === null){
                dataDB = []
            }else{
                dataDB = LocalDB;
            } 

            dataDB.forEach((data, index) => {
                data.aboutValue.length <= 15 ? val1 = data.aboutValue : val1 = data.aboutValue.substring(0, 15) + '...';
                data.publisherValue.length <= 15 ? val2 = data.publisherValue : val2 = data.publisherValue.substring(0, 15) + '...';
                data.platformValue.length <= 15 ? val3 = data.platformValue : val3 = data.platformValue.substring(0, 15) + '...';
                data.imageValue.length <= 15 ? val4 = data.imageValue : val4 = data.imageValue.substring(0, 15) + '...';
                HTML += `
                    <div class="data_tb">
                        <div class="field">
                            <div class="field_content">
                                <img class="imgcircle" src="${data.gameValue}" />
                            </div>
                        </div>
                        <div class="field">
                            <div class="field_content">${val1}</div>
                        </div>
                        <div class="field">
                            <div class="field_content">${val2}</div>
                        </div>
                        <div class="field">
                            <div class="field_content">${val3}</div>
                        </div>
                        <div class="field">
                            <div class="field_content">${val4}</div>
                        </div>
                        <div class="field">
                            <div class="field_content"><i class="fas fa-trash-alt" id="${index}"></i></div>
                        </div>
                    </div>
                    `;
                    // <i class="fas fa-pencil-alt"></i>
            });
            
            document.querySelector('.table_body').innerHTML += HTML;
        },

        deletedatafromDB : (index) => {
            let LocalDB;            
            LocalDB = JSON.parse(localStorage.getItem('LocalDB'));
                // console.log(dataDB.ids);
                dataDB.splice(index,1);
                localStorage.setItem('LocalDB', JSON.stringify(dataDB));
        }
    };

})();  



let allActions = ((allInputs) => {
    
    let Domthings = allInputs.DOMfields();

    let actionsfromScreen = () => {
        document.querySelector('.submit_btn').addEventListener('click', submitorEnter);

        document.addEventListener('keypress', (e) => {
            if(e.key === 'Enter'){
                submitorEnter();
            }
        });

        Domthings.tablebody.addEventListener('click', (e) => {
            // allInputs.deletedatafromDB(e);
            // console.log(e.target.classList.contains('fa-trash-alt'));
            if(e.target.classList.contains('fa-trash-alt')) {
                let ids = Number(e.target.id);
                // console.log(e.target.parentElement.parentElement.parentElement);
                e.target.parentElement.parentElement.parentElement.remove();
                allInputs.deletedatafromDB(ids);
            }
        })
    };

    

    let submitorEnter = () => {
        let gameValue, aboutValue, publisherValue, platformValue, imageValue;

            gameValue = Domthings.gameInput.value;
            aboutValue = Domthings.aboutInput.value;
            publisherValue = Domthings.publishersInput.value;
            platformValue = Domthings.platformsInput.value;
            imageValue = Domthings.imageurlInput.value;

        if(gameValue !== '' && aboutValue !== '' && publisherValue !== '' && platformValue !== '' && imageValue !== ''){
            // gameValue.length <= 15 ? gameValue = gameValue : gameValue = gameValue.substring(0, 15) + '...';
            // aboutValue.length <= 15 ? aboutValue = aboutValue : aboutValue = aboutValue.substring(0, 15) + '...';
            // publisherValue.length <= 15 ? publisherValue = publisherValue : publisherValue = publisherValue.substring(0, 15) + '...';
            // platformValue.length <= 15 ? platformValue = platformValue : platformValue = platformValue.substring(0, 15) + '...';
            
            allInputs.ADDdatatoScreen(gameValue, aboutValue, publisherValue, platformValue, imageValue);
        }
    };

    return {
        init : function(){
            console.log('App Start');
            actionsfromScreen();
            allInputs.ParsedatafromDB();
        }
    }

})(allInputs);

allActions.init();