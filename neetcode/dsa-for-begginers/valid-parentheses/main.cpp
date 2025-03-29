#include <iostream>
#include <map>
#include <vector>

using namespace std;

class Solution {
public:
    bool isOpening(char c) {
        return (c == '(' || c == '{' || c == '[');
    }

    bool isValid(string s) {
        if(s.size() % 2 != 0) {
            return false;
        }

        vector<char> stack = {};

        map<char, char> opposites = {{')', '('}, {']', '['}, {'}', '{'}};

        for(int i = 0; i < s.size(); i++) {
            char curr = s[i];

            if(isOpening(curr)) {
                stack.push_back(curr);
            } else {
                if(stack.empty()) {
                    return false;
                }

                if(opposites[curr] == stack.back()) {
                    stack.pop_back();
                } else {
                    return false;
                }
            }
        }

        return stack.empty();
    }
};

int main () {
    string s = "]{";

    Solution solution;

    bool res = solution.isValid(s);

    cout << res << endl;

    return 0;
}
