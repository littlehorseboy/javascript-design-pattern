// 只要叫起來像鴨子 就可以加入合唱團

const duck = {
  duckSinging: () => {
    console.log('嘎嘎嘎');
  }
};

const chicken = {
  duckSinging: () => {
    console.log('嘎嘎嘎');
  }
};

const choir = [];

const joinChoir = (animal) => {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal);
    console.log('恭喜加入合唱團');
    console.log(`合唱團已有成員數量: ${choir.length}`);
  }
}

joinChoir(duck);

joinChoir(chicken);
