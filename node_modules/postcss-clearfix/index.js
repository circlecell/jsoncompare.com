'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-clearfix', function () {
  return function (css) {

    /**
     * Clear: fix; rule handler
     * @param  {string} decl  current decleration
     */
    function clearFix(decl){

      var origRule = decl.parent,
          ruleSelectors = origRule.selectors,
          newRule;

      ruleSelectors = ruleSelectors.map(function(ruleSelector){
          return ruleSelector + ':after';
        }).join(',\n');

      // Insert the :after rule before the original rule
      newRule = origRule.cloneBefore({
        selector: ruleSelectors
      }).removeAll();

      newRule.append('content: \'\'; display: table; clear: both;');

      // If the original rule only had clear:fix in it, remove the whole rule
      if (decl.prev() === undefined && decl.next() === undefined) {
        origRule.remove();
      } else {
        // Otherwise just remove the delcl
        decl.remove();
      }

    };

    /**
     * Clear: fix-legacy; rule handler
     * @param  {string} decl  current decleration
     */
    function clearFixLegacy(decl) {

      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        bothRuleSelectors,
        afterRuleSelectors,
        bothRule,
        afterRule;

        bothRuleSelectors = ruleSelectors.map(function(ruleSelector){
            return ruleSelector + ':before,\n' + ruleSelector + ':after';
        }).join(',\n');

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

      // Insert new rules before the original rule
      bothRule = origRule.cloneBefore({
        selector: bothRuleSelectors
      }).removeAll();

      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      bothRule.append('content: \'\'; display: table;');

      // Longhand syntax operates a little quicker, only single decls here so use it.
      afterRule.append({
        prop: 'clear',
        value: 'both'
      });

      origRule.append({
        prop: 'zoom',
        value: '1'
      });

      decl.remove();
    };

    // Run handlers through all relevant CSS decls
    css.walkDecls('clear', function(decl) {

      switch (decl.value) {

        // Pass all clear: fix; properties to clearFix()
        case 'fix':
          clearFix(decl);
          break;

        // Pass all clear: fix-legacy properties to clearFixLegacy()
        case 'fix-legacy':
          clearFixLegacy(decl);
          break;

      }

    });

  };
});
