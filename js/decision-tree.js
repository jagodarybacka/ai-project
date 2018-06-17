const SAMPLE_DATASET = require('../data/sample.json');
const SAMPLE_DATASET_CLASS_NAME = 'decision';

var ID3 = require('../lib/decision-tree');

  var dt;
  dt = new ID3(SAMPLE_DATASET.data, SAMPLE_DATASET_CLASS_NAME, SAMPLE_DATASET.features);

    console.log(dt);

console.log("Atrybut mający największą wagę(minimalną entropię): ");
console.log(dt.toJSON());

    var sample = SAMPLE_DATASET.data[0];
    var predicted_class = dt.predict(sample);
    var actual_class = sample[SAMPLE_DATASET_CLASS_NAME];
    //console.log(predicted_class, actual_class);

    var accuracy = dt.evaluate(SAMPLE_DATASET.data);
    //console.log("zlożoność", accuracy);

    var treeModel = dt.toJSON();
   // console.log(treeModel.constructor, Object);
   // console.log(treeModel.vals.constructor, Array);
 //  console.log("Wysokość drzewa: ", treeModel.vals.length);