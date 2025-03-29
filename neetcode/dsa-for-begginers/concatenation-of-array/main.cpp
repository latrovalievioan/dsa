#include <iostream>
#include <vector>
using namespace std;

class Solution {
    public:
        vector<int> getConcatenation(vector<int>& nums) {
            int size = nums.size();

            nums.resize(size * 2);

            for (int i = 0; i < size; i++) {
                nums[i + size] = nums[i];
            };

            return nums;
        }
};

int main () {
    vector<int> xs = {1,2,3};
    Solution solution;

    vector<int> res = solution.getConcatenation(xs);

    for (int i = 0; i < res.size(); i++) {
        cout << res[i] << ' ';
    };

    cout << endl;

    return 0;
}
