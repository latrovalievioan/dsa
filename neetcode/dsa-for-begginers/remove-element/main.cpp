#include <iostream>
#include <ostream>
#include <vector>

using namespace std;

class Solution {
    public:
        int removeElement(vector<int>& nums, int val) {
            int k = 0;

            for (int i = 0; i < nums.size(); i++) {
                if(nums[i] != val) {
                    nums[k] = nums[i];
                    k++;
                }
            }

            // This is here for debugging purpose
            for(int i = 0; i < nums.size(); i++) {
                cout << nums[i] << ' ';
            }

            cout << endl;

            return k;
        };
};

int main () {
    vector<int> xs = {3,2,2,3};
    int val = 3;

    Solution solution;
    
    int res = solution.removeElement(xs, val);

    cout << res << endl;

    return 0;
};
