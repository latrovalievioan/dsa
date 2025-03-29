#include <vector>

using namespace std;

class MinStack {
public:
    vector<int> stack;
    vector<int> minstack;

    MinStack() {
        stack = {};
        minstack = {};
    }
    
    void push(int val) {
        stack.push_back(val);

        if (minstack.empty()) {
            minstack.push_back(val);
        }else {
            if(val < minstack.back()) {
                minstack.push_back(val);
            } else {
                minstack.push_back(minstack.back());
            }
        }
    }
    
    void pop() {
        stack.pop_back();
        minstack.pop_back();
    }
    
    int top() {
        return stack.back();
    }
    
    int getMin() {
        return minstack.back();
    }
};
