$(document).ready(function() {

    // ********* fieldSet Tipos *********
    $('#0').click(function() {
        $('.div_til').remove();//remove outros inputs
        $('.div_ima').remove();

        if($('.div_das').length === 0){//add input
            $('.das').append(`
                <div class="form-group div_das">
                    <ul>
                        <li>
                            Dashboard ID: <input type="text" class="form-control" name="input_dash"/>
                        </li>
                    </ul>
                </div>
            `); 
        }   
    });

    $('#1').click(function() {
        $('.div_das').remove();//remove outros inputs
        $('.div_ima').remove(); 

        if($('.div_til').length === 0){//add input
            $('.til').append(`
                <div class="form-group div_til">
                    <ul>
                        <li>
                            Dashboard ID: <input type="text" class="form-control" name="input_tile_dash"/>
                        </li>
                        <li>
                            Tile ID: <input type="text" class="form-control" name="input_tile_tile"/>
                        </li>
                    </ul>
                </div>
            `);
        }   
    });

    $('#2').click(function() {
        $('.div_das').remove();//remove outros inputs
        $('.div_til').remove();
        
        if($('.div_ima').length === 0){//add input
            $('.ima').append(`
                <div class="div_ima">
                    <input type="file" class="form-control-file" id="controlfile">
                </div>
            `); 
        }   
    });

});