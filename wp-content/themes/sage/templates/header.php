<header class="banner">
  <div class="container">
    <!--a class="brand" href="<?= esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a-->
    <nav class="nav-primary">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
      endif;
      ?>
    </nav>
  </div>

<?php
if(is_singular( 'project' )):
?>

<?php
    $tabs = get_field('activate_tabs');
    $field = get_field_object('activate_tabs'); 
?>
<div class="floating-breadcrumb activenav">
        <a href="<?=bloginfo('url')?>/projects">Projects</a>
        <a href="#"><?=the_title();?></a>
        <a href="#photography" id="photography">Photography</a>
        <?php if( $tabs ):?>
            <?php foreach( $tabs as $tab ): ?>
                <a href="#<?=$tab?>" id="<?=$tab?>"><?=$field['choices'][ $tab ];?></a>
            <?php endforeach;?>
        <?php endif;?>
    
</div>
<?php endif; if(is_page( 'biography' )):?>
<!--biography-->
<div class="floating-breadcrumb">
        <a href="<?=bloginfo('url')?>/biography">Biography</a>
        <?php
            $args = array(
                'posts_per_page'         => '5',
                'post_type'   => 'biography',
                'post_status' => 'publish'
            );
            $projects = new WP_Query( $args );
            if( $projects->have_posts() ) :
                while( $projects->have_posts() ) : $projects->the_post();
                ?>
                <a href="<?=get_post_permalink( get_the_ID() ); ?>"><?=get_the_title()?></a>
                <?php
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
    </div>
<?php endif;?>
</header>
