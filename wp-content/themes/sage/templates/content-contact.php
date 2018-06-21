<section class="single-page" id="view-info">
    <section id="contact">
        <?php
        if( have_rows('text_content') ): 
            while( have_rows('text_content') ): the_row(); 
                $col1 = get_sub_field('column_1');
                $col2 =  get_sub_field('column_2');
                $col3 =  get_sub_field('column_3');
                $col4 =  get_sub_field('column_4');
            endwhile;
        endif;
        ?>
        <div class="row">
            <div class="col-sm-3"><?=$col1?></div>
            <div class="col-sm-3"><?=$col2?></div>
            <div class="col-sm-3"><?=$col3?></div>
            <div class="col-sm-3"><?=$col4?></div>
        </div>
    </section>
</section>
