$(function(){
    $('#reservation').datepicker();

        $('.lesson').on('change', function(){
            let lesson = $('input[name=your-lesson]:checked').val();
            
            if (lesson == 'online'){
                $('.note-online').css('display', 'block');
                $('.note-venue').css('display', 'none');
            } else if (lesson == 'venue'){
                $('.note-online').css('display', 'none');
                $('.note-venue').css('display', 'block');
            }
        });

        $('#submit-button').on('click', function(){
            $('#name-error').text("");
            $('#tell-error').text("");
            $('#reservation-error').text("");
            $('#lesson-error').text("");

            if($('input[name="your-name"]').val() == ""){
                $("#name-error").text("名前は必須項目です。");
            }

            if(
                ($('input[name="your-tell1"]').val() == "")||
                ($('input[name="your-tell2"]').val() == "")||
                ($('input[name="your-tell3"]').val() == "")
            ) {
                $("#tell-error").text("電話番号は必須項目です。");
            }
            if($('input[name="your-reservation"]').val() == "") {
                $("#reservation-error").text("予約日は必須項目です。");
              }
    });
});