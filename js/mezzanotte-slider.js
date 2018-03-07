// JavaScript jQuery Plugin Mezzanotte Slider - Lucas Pedro
(function(){

//Definicao do nome do plugin e chamada com opcoes
jQuery.fn.mezzanotteSlider = function(options){
  //Seta os valores padrões
  var defaults = {
    controls:true,
    pages:true,
    arrows:true,
    auto:false,
    tempRoll:3000
  }

var options = $.extend(defaults, options);

//Inicialização do Plugin
return this.each(function(){
  //Objeto
  var obj = jQuery(this);
  var listaItens = obj.find('ul'); //
  var itens = listaItens.find('li');
  var qtdItens = parseInt(itens.length);//detecta a quantidade de itens deste elemento em especifico, nesse caso a quantidade de li
  obj.addClass('mezzanotteSlider'); //adiciona a classe de formatação na id de chamada do plugin

  // adicionando controle
  var strControl = '<div class="slideControl"><div class="slidePag">';
  var i = 1;

  while (i <= qtdItens) {
    strControl += '<a href="javascript:void(0)"></a>';
    i++;
  }
  strControl += '</div></div>';

  obj.append(strControl); //imprime o while do strControl acima na página

  var controls = obj.find('.slideControl');
  var btnControl = controls.find('.slidePag a');

  var strArrows = '<div class="arrows"><a href="javascript:void(0)" class="prev"><img src="img/chevron_left_white.svg"></a><a href="javascript:void(0)" class="next"><img src="img/chevron_right_white.svg"></a></div>';
  controls.append(strArrows); //imprime o strArrows acima na página

  var btnArrow = controls.find('.arrows a');

  btnArrow.click(function(){
    var idxItemAtivo = itens.parent().find('li.ativo').index();

    if($(this).hasClass('prev')){
      if(idxItemAtivo != 0){
        btnControl.eq(idxItemAtivo-1).click();
      }
    }else if($(this).hasClass('next')){
      if(idxItemAtivo <= qtdItens){
        btnControl.eq(idxItemAtivo+1).click();
      }
    }
  });


  // botoes de paginas
  btnControl.click(function(){
    var self = $(this);
    var idx = self.index();

    btnControl.removeClass('ativo');
    self.addClass('ativo');

    itens.removeClass('ativo').hide();
    itens.eq(idx).addClass('ativo').show();
  });


  // rolagem automática
  if(options.auto == true){
    var autoRoll = setInterval(function(){ setRoll() }, options.tempRoll);

    console.log('Rolagem automática ATIVADA');

    function setRoll(){
      var idxItemAtivo = itens.parent().find('li.ativo').index();
      // var idxInicial = itens.parent().find('li').index();

      if((idxItemAtivo+1) < qtdItens){
        btnControl.eq(idxItemAtivo+1).click();
      }else{
        btnControl.eq(0).click();
      }
    }

  }else{
    console.log('Rolagem automátia DESATIVADA');
  }

  if(options.controls == false){
    controls.hide();
    console.log('Controle de slider DESATIVADO');
  }else{
    console.log('Controle de slider ATIVADO');
  }

  if(options.arrows == false){
    btnArrow.hide();
    console.log('Setas DESATIVADAS');
  }else{
    console.log('Setas ATIVADAS');
  }

  if(options.pages == false){
    btnControl.hide();
    console.log('Botões de páginas DESATIVADO');
  }else{
    console.log('Botões de páginas ATIVADO');
  }

  btnControl.eq(0).click();

});//fim

}
})(jQuery);
