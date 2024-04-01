let player;
let status;
let monster;
let boss;

//---------------------------------------------------------------- Fase 1-----------------------------------------------------------------//
function inicioA() {
  console.log(
    "Ao entrar na masmorra, você percebe que as paredes estão cobertas por símbolos estranhos, emitindo uma luz fraca na penumbra. O ar dentro está impregnado com o cheiro forte de morte e decomposição, fazendo sua pele arrepiar. Você consegue ouvir os sons distantes de algo se movendo nas profundezas da masmorra, mas não consegue identificar exatamente o que é."
  );
}

function inicioB() {
  let sorte = Math.random();

  if (sorte < 0.5) {
    alert(
      " Você decide explorar a área circundante. Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a expectativa cresce enquanto você se prepara para adentrar a dungeon."
    );
  } else {
    alert(
      "Você decide explorar a área circundante, esperando encontrar pistas ou recursos valiosos que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas que lhe deixam curioso, você continua a busca e finalmente descobre algo: um frasco misterioso escondido entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. Intrigado, você examina mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga, sugere que a poção tem propriedades de cura."
    );
    player.hp += 500;
  }
  inicioA();
}
//---------------------------------------------------------------- Fase 1-----------------------------------------------------------------//

//---------------------------------------------------------------- Fase 2-----------------------------------------------------------------//
function fase2fim() {
  alert(
    "Ao olhar adiante, sua equipe depara-se com um grupo de esqueletos dispostos em uma formação ameaçadora. Suas figuras ósseas parecem animadas e prontas para o combate enquanto ficam próximas a um cristal que emite uma luz fraca. As órbitas vazias dos olhos focam em você com uma intensidade sinistra conforme você se aproxima cautelosamente, sentindo a presença ameaçadora dos mortos-vivos."
  );
}

function fase2A() {
  let chanceQueda = Math.random();

  if (chanceQueda < 0.5) {
    player.hp -= 200;
    alert(" Ao seguir caminhando você tropeça...(-200 de hp)");
  } else {
    alert(
      "Ao seguir caminhando pela caverna, o tempo passa e a sua a equipe de aventureiros começa a ganhar confiança, a atenção vai se dispersando e quando notam, todos estão fazendo piadas em tom de voz descontraído. Tudo parece estar indo bem até que todos começam a ouvir um ruído arrepiante surgindo em meio a suas vozes, o clima alegre se dissipa repentinamente, todos ficam alertas e em silêncio, tentando observar o que os espera pela frente."
    );
  }
  fase2fim();
}

function fase2B() {
  alert(
    "Ao analisar o interior da caverna, você nota que o piso está repleto de ossos de animais, deixando o cheiro pútrido ainda mais evidente, você começa a observar as paredes da caverna e encontra um objeto pendurado..."
  );

  let escolha = prompt(
    "O que você quer fazer ? \n(A) Sair fora \n(B) Analisar objeto. "
  ).toUpperCase();

  if (escolha == "A") {
    alert(
      "Ao sair fora, você tropeça em um monte de ossos. O estrondo ecoa pelo ambiente e o barulho rompe o silêncio, alertando aqueles que vivem nas profundezas da caverna..."
    );
  } else if (escolha == "B") {
    player.dano += 430;
    alert(
      "O objeto parece ser uma lanterna antiga, coberta de poeira e teias de aranha. Ao se aproximar para examiná-la, você percebe que ainda há vestígios de óleo dentro dela, e ao tocar nela você a derruba abruptamente com um estrondo alto, ecoando pelo ambiente. O barulho rompe o silêncio, deixando a equipe tensa e alerta, tentando prestar atenção ao que os espera adiante +PODER"
    );
  }
  fase2fim();
}
//---------------------------------------------------------------- Fase 2-----------------------------------------------------------------//

//---------------------------------------------------------------- Combate Monster -----------------------------------------------------------------//

//Player Atk-------
function playerAtk() {
  let playerAtk = +prompt(`A batalha iniciou escolha seu ataque
            
        Player:                                [1] Ataque simples : 100% acerto
        Nome: ${player.nome}           
        HP: ${player.hp}                            [2] Ataque combo    
        Atk: ${player.dano}
                                                  [3] Ataque especial


            `);

  let danoTemporario;
  let dado = parseInt(Math.random() * 6);

  if (playerAtk == 1) {
    monster.vida -= player.dano;
    alert(
      `Você usou Ataque simples com sucesso! você causou dano de ${player.dano}. Ainda restam ${monster.vida} de ${monster.nome}`
    );
  } else if (playerAtk == 2) {
    if (dado > 2) {
      danoTemporario = player.dano * 1.5;
      monster.vida -= danoTemporario;
      alert(
        `Você desferiu um ataque combo com sucesso! O ${monster.nome} sofreu ${danoTemporario} de dano. Ainda restam ${monster.vida} pontos de vida ${monster.nome}`
      );
    } else {
      alert(
        `Você desferiu um ataque combo mas errou. O ${monster.nome} não sofreu dano. Ainda restam ${monster.vida} pontos de vida...`
      );
    }
  } else if (playerAtk == 3) {
    if (dado > 4) {
      danoTemporario = player.dano * 2;
      monster.vida -= danoTemporario;
      alert(
        `Você desferiu um ataque especial com sucesso! O ${monster.nome} sofreu ${danoTemporario} de dano. Ainda restam ${monster.vida} pontos de vida...`
      );
    } else {
      alert(
        `Você desferiu um ataque especial mas errou. O Ataque Especial não sofreu dano! Ainda restam ${monster.vida} pontos de vida...`
      );
    }
  }
}

//-------------------

//Monster Atk--------

function monsterAtk() {
  if (monster.vida <= 0) {
    return;
  }

  alert(`Turno inimigo: ${monster.nome}`);

  dado = Math.random();

  if (dado < 0.7) {
    player.hp -= monster.ataque;
    alert(
      `${monster.nome} usou o ataque tormenta de aço, você perdeu ${monster.ataque} pontos de vida e está com ${player.hp} de HP`
    );
  } else {
    alert(
      ` ${monster.nome} usa o ataque tormenta de aço mas falhou! Você continua com ${player.hp} de HP.`
    );
  }
}

//--------------

//---------------------------------------------------------------- Combate Monster -----------------------------------------------------------------//

//---------------------------------------------------------------- Combate Boss  -----------------------------------------------------------------//

//Player Atk-------
function playerAtkBoss() {
  let playerAtk = +prompt(`A batalha iniciou escolha seu ataque:
        
        Player:                                [1] Ataque simples : 100% acerto
        Nome: ${player.nome}           
        HP: ${player.hp}                            [2] Ataque combo    
        Atk: ${player.dano}
                                                  [3] Ataque especial

                                                [4] Cura do paladino


            `);
  let danoTemporario;
  let dado = parseInt(Math.random() * 6);

  if (playerAtk == 1) {
    boss.vida -= player.dano;
    alert(
      `Você usou Ataque simples com sucesso! você causou dano de ${player.dano} Ainda restam ${boss.vida} do${boss.nome}.`
    );
  } else if (playerAtk == 2) {
    if (dado > 2) {
      danoTemporario = player.dano * 1.5;
      boss.vida -= danoTemporario;
      alert(
        `Você desferiu um ataque combo com sucesso! O ${boss.nome} sofreu ${danoTemporario} de dano. Ainda restam ${boss.vida} pontos de vida do ${boss.nome}.`
      );
    } else {
      alert(
        `Você desferiu um ataque combo mas errou. O ${boss.nome} não sofreu dano! Ainda restam ${boss.vida} pontos de vida.`
      );
    }
  } else if (playerAtk == 3) {
    if (dado > 3) {
      danoTemporario = player.dano * 2;
      boss.vida -= danoTemporario;
      alert(
        `Você desferiu um ataque especial com sucesso! O ${boss.nome} sofreu ${danoTemporario} de dano. Ainda restam ${boss.vida} pontos de vida do ${boss.nome}.`
      );
    } else {
      alert(
        `Você desferiu um ataque especial mas errou. O ${boss.nome} Ataque Especial não sofreu dano! Ainda restam ${boss.vida} pontos de vida.`
      );
    }
  } else if (playerAtk == 4) {
    if (dado > 2) {
      player.hp += 400;
      alert(
        `O paladino viu que você estava precisando de ajuda. Então usou uma cura de 400 HP sua vida agora é ${player.hp}`
      );
    } else {
      alert("Acabou a mana do paladino. A cura falhou");
    }
  }
}

//-------------------

//Boss Atk--------

function bossAtk() {
  if (boss.vida <= 0) {
    return;
  }

  alert(`Turno inimigo: ${boss.nome}`);

  dado = Math.random();

  if (dado < 0.7) {
    player.hp -= boss.ataque;
    alert(
      `${boss.nome} usou o ataque Lightning Explosion, você perdeu ${boss.ataque} pontos de vida e está com ${player.hp} de HP`
    );
  } else {
    alert(
      `  Nameless King usa o ataque Lightning Explosion mas falhou! Você continua com ${player.hp} de HP.`
    );
  }
}

//--------------

//---------------------------------------------------------------- Combate Boss -----------------------------------------------------------------//

//---------------------------------------------------------------- Boss Status -----------------------------------------------------------------//

function statusBoss() {
  alert(
    `No meio da nevoa surge um ser desconhecido com uma aparecia tenebronsa.
           Usando uma armadura dourada brilhante, adornada com detalhes intrincados e símbolos que refletem sua posição real e seu poder.
           Sua armadura cobre completamente seu corpo, incluindo um capacete que oculta seu rosto e expressão.

              Boss Status
              -_-_-_-_-_-_-_-
              Nome: ${boss.nome}
              Vida: ${boss.vida}
              Ataque: ${boss.ataque}
              -_-_-_-_-_-_-_-
      Reconpensa: união dos povos: +8000 de vida e paz mundial por 1 ano
              `
  );
}

//---------------------------------------------------------------- Boss Status -----------------------------------------------------------------//

alert(
  "Você Entrou no mundo de TaleCraft, crie seu personagem com nome e status maximo de 20 pontos "
);

while (status != 20) {
  let nome = prompt("Digite seu nome pra continuar a jornada");
  let vida = +prompt("Quantos pontos quer adicionar em vida ? ");
  let ataque = +prompt("Quantos pontos quer adicionar em ataque ? ");
  status = vida + ataque;

  //Criação do personagem
  player = {
    nome: nome,
    hp: vida * 100,
    dano: ataque * 10000,
  };

  //--------------------//

  if (status != 20) {
    alert("Você atribuiu os pontos de forma errada tente denovo");
  } else {
    alert(
      `Muito bem ${player.nome}, você criou seu personagem com ${player.hp} de HP e ${player.dano} de DANO.`
    );
    alert(
      `Então ${player.nome}, já se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros, e você estava se preparando para sua primeira incursão em uma masmorra! Após alguns dias de viagem, você  chega à entrada da misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra está diante de você, escura e ameaçadora. As paredes de pedra são escorregadias de umidade, e o ar cheira a mofo e decomposição.`
    );
  }
}

let escolha = prompt(
  "O que você quer fazer ? \n(A) Entrar na caverna \n(B) explorar as redondezas ?"
).toUpperCase();

if (escolha == "A") {
  inicioA();
} else if (escolha == "B") {
  inicioB();
}

let escolha2 = prompt(
  "Faça sua escolha: \n(A) Seguir caminhando \n(B) Analisar o interior da caverna"
).toUpperCase();

if (escolha2 == "A") {
  fase2A();
} else if (escolha2 == "B") {
  fase2B();
}

monster = {
  nome: "Stalfos",
  vida: 2600,
  ataque: 150,
};

let escolha3 = prompt(
  "Faça sua escolha: \n(A) Lutar \n(B) Fugir "
).toUpperCase();

if (escolha3 == "A") {
  alert(
    `Lutar contra o exercito de ${monster.nome},
              Monster Status
              -_-_-_-_-_-_-_-
              Nome: ${monster.nome}
              Vida: ${monster.vida}
              Ataque: ${monster.ataque}
              -_-_-_-_-_-_-_-`
  );

  while (monster.vida > 0 && player.hp > 1) {
    playerAtk();
    monsterAtk();
  }
} else if (escolha3 == "B") {
  alert(
    "Ao Sair correndo você bate com a cabeça num pilar de pedra e perde a consciência..."
  );
  alert("Você ficou inconsciente por muito tempo e foir morto (reset o jogo)");
  location.reload(forceReload);
}

if (monster.vida <= 0) {
  alert(
    `Parabéns, você venceu a batalha contra ${monster.nome}, a equipe comemora pelo grande feito.`
  );

  player.dano += 90;
  player.hp += 300;
  alert(
    `Você recebeu 300 de hp agora tem ${player.hp} e mais 90 de dano agora tem ${player.dano}`
  );
  alert(
    "Finalmente o Exército foi conquistado! Uma sesação de paz invade cada centímetro da câmara... Num piscar de olhos você está em uma planície muito peculiar e ao mesmo tempo familiar também... você percebe que está diante de três portas..."
  );
} else if (player.hp <= 0) {
  alert(
    `${player.nome}, infelizmente não foi dessa vez... tente novamente! ;)`
  );
  alert(
    "Não foi dessa vez que você derrotou o antigo Exército de Esqueletos... tudo fica escuro e quieto..."
  );
  alert("Você foi morto (reset o jogo)");
  location.reload(forceReload);
}

alert(
  "Então quando você estava indo em direção a porta escolhida você ouve uma voz logo atrás de você, é um paladino perdido vendo que a situação estava bem ruim ele decide te ajudar para sair dali juntos."
);

boss = {
  nome: "Nameless King",
  vida: 3200,
  ataque: 300,
};

let portas = prompt(
  "Você precisa escolher em qual porta você vai entrar \n [A] Porta de ouro \n [B] Porta de prata \n [C] Porta da casa do seus pais "
).toUpperCase();

if (portas == "A") {
  alert(
    `Você escolhe a Porta de Ouro. Atrás dela você encontra muito ouro, cristais, etc... você começa a imaginar toda a glória e poder que poderá onter com este tesouro praticamente infinito. Assim que você toca a primeira moeda a seu alncace uma voz grave e ecoante chama seu nome... "Então você prefere assim? Acha que seria fácil?"... o ${boss.nome}  suege com uma aura de poder nunca antes vista...`
  );
  statusBoss();
} else if (portas == "B") {
  alert(
    'Você escolhe a Porta de Ferro, após atravessa-la tudo a sua volta desaparece, o infinito é seu novo horizonte... alguns minutos se passam até que você consegue escutar alguém chamando por seu nome... "Finalmente você conseguiu chegar até minha morada... Seus passos até aqui não foram fáceis, não espere nenhum tipo de alívio agora..."'
  );
  statusBoss();
} else if (portas == "C") {
  alert(
    "Você escolhe a Porta da Casa dos seus Pais. ao atravessa-la você se sente quente e cada vez mais pesado, estranhamente isso não o incomoda..."
  );
  location.reload();
}

if (portas == "A" || portas == "B") {
  while (player.hp > 1 && boss.vida > 1) {
    playerAtkBoss();
    bossAtk();
  }
}

if (boss.vida <= 0) {
  alert(
    `O ${boss.nome} não mais nos assombrará! É hora de voltar a vila e comemorar com o povo...`
  );
  player.hp += 800;
  location.reload();
} else if (player.hp <= 0) {
  alert(
    `Por quantos séculos mais ${boss.nome} reinará nas sobras de nosso vale? Tudo fica escuro e quieto...`
  );
  location.reload();
}
