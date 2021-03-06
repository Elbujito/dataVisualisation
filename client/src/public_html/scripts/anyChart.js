anychart.onDocumentReady(function () {

    // create a chart and set the data
    var chart = anychart.treeMap(getData(), "as-tree");

    // set the maximum depth of levels shown
    chart.maxDepth(2);

    // set the depth of hints
    chart.hintDepth(1);

    // set the opacity of hints
    chart.hintOpacity(0.7);  

    // configure labels
    chart.labels().format("{%name}");

    // disable tooltips
    chart.tooltip(false);

    // set the chart title
    chart.title("Treemap: Depth and Hints");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
});

// get data
function getData() {
  // create data
  var data = [
    {name:       "Root", children: [
      {name:     "Item 1", children: [
        {name:   "Item 1-1", children: [
          {name: "Item 1-1-1", value: 1000},
          {name: "Item 1-1-2", value:  600},
          {name: "Item 1-1-3", value:  550},
          {name: "Item 1-1-4", value:  300},
          {name: "Item 1-1-5", value:  150}
        ]},
        {name:   "Item 1-2",   value: 2300},
        {name:   "Item 1-3",   value: 1500}
      ]},
      {name:     "Item 2", children: [
        {name:   "Item 2-1", children: [
          {name: "Item 2-1-1", value: 2100},
          {name: "Item 2-1-2", value: 1000},
          {name: "Item 2-1-3", value:  800},
          {name: "Item 2-1-4", value:  750}
        ]},
        {name:   "Item 2-2", children: [
          {name: "Item 2-2-1", value:  560},
          {name: "Item 2-2-2", value:  300},
          {name: "Item 2-2-3", value:  150},
          {name: "Item 2-2-4", value:   90}
        ]},
        {name:   "Item 2-3",   value:  400}
      ]},
      {name:     "Item 3", children: [
        {name:   "Item 3-1", children: [
          {name: "Item 3-1-1", value:  850},
          {name: "Item 3-1-2", value:  400},
          {name: "Item 3-1-3", value:  150}
        ]},
        {name:   "Item 3-2",   value: 1350},
        {name:   "Item 3-3",   value: 1300},
        {name:   "Item 3-4", children: [
          {name: "Item 3-4-1", value:  400},
          {name: "Item 3-4-2", value:  300},
          {name: "Item 3-4-3", value:  250},
          {name: "Item 3-4-4", value:  150}
        ]}
      ]}  
    ]} 
  ];
  return data;
}