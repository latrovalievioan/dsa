#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int lastUnique = 0; 

        for (int i = 1; i < nums.size(); i++) {
            if(nums[i] != nums[i-1]) {
                nums[lastUnique + 1] = nums[i];

                lastUnique++;
            }
        };

        return lastUnique + 1;
    }
};

int main() {
    vector<int> nums = {0, 1, 1, 2, 3};
    Solution solution;
    int result = solution.removeDuplicates(nums);

    cout << result << std::endl;

    return 0;
}
