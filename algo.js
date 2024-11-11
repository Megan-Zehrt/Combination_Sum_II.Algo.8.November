// 40. Combination Sum II



// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.





/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    let results = []
    candidates.sort((a,b) => a-b)

    function helper(index, temp, sum){

        if(sum == target){
            results.push([...temp])
            return
        }

        for(let i = index; i < candidates.length; i++){

            if(i > index && candidates[i] == candidates[i-1]) continue
            
            if(sum + candidates[i] > target){
                break
            }else{
                temp.push(candidates[i])
                helper(i+ 1, temp, sum + candidates[i])
            }

            temp.pop()
        }

    }

    helper(0, [], 0)
    return results
};