#include <iostream>

using namespace std;

class ListNode {
public:
    int val;
    ListNode* next;

    ListNode(int pVal, ListNode* pNext) {
        val = pVal;
        next = pNext;
    }
};

class MyLinkedList {
public:
    ListNode* head;
    ListNode* tail;
    int length;

    MyLinkedList() : 
        head {nullptr},
        tail {nullptr},
        length  {0}
        {}

    MyLinkedList(const MyLinkedList& other) : MyLinkedList() {
        cout<<"Copy ctor" << endl;
        *this = other;
    }


    MyLinkedList& operator=(const MyLinkedList& other) {
        cout<<"Copy = \n";
        if(this != &other) {
            clear();
            ListNode* curr = other.head;
            while(curr) {
                addAtTail(curr->val);
                curr = curr->next;
            }
        }

        return *this;
    }

    MyLinkedList& operator=(MyLinkedList&& other) {
        cout<<"Move = \n";
        if(this != &other) {
            swap(head, other.head);
            swap(tail, other.tail);
            swap(length, other.length);
            other.clear();
        }

        return *this;
    }

    ~MyLinkedList() {
        cout<<"dtor \n";
        show();
        clear();
    }

    void clear() {
        while(length) {
            deleteAtIndex(0);
        }
    }
    
    int get(int index) {
        if(index > length - 1) return -1;

        int i = 0;
        ListNode* curr = head;

        while (i != index) {
            curr = curr->next;
            i++;
        }

        cout << curr->val << endl;

        return curr->val;
    }
    
    void addAtHead(int val) {
        if(!head) {
            head = new ListNode(val, nullptr);
            tail = head;
        } else {
            head = new ListNode(val, head);
        }

        length++;

        // show();
    }
    
    void addAtTail(int val) {

        ListNode* newNode = new ListNode(val, nullptr);

        if(!tail || !head) {
            head = newNode;
            tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }

        length++;

        // show();
    }
    
    void addAtIndex(int index, int val) {
        if(index < 0 || index > length) {
            // show();

            return;
        }

        if(index == 0) {
            addAtHead(val);

            return;
        }

        if(index == length) {
            addAtTail(val);

            return;
        }

        int i = 0;
        ListNode* curr = head;

        while(i < index - 1) {
            curr = curr->next;
            i++;
        }

        ListNode* newNode = new ListNode(val, curr->next);

        curr->next = newNode;

        length++;

        // show();
    }
    
    void deleteAtIndex(int index) {
        if(index >= length || index < 0) {
            // show();

            return;
        }

        int i = 0;
        ListNode* curr = head;

        if(index == 0) {
            if(length == 1) {
                head = nullptr;
                tail = nullptr;

                delete curr;
            } else if(length == 2) {
                auto tmp = curr;
                curr = curr->next;
                head = curr;
                tail = curr;

                delete tmp;
            } else {
                auto tmp = curr;
                curr = curr->next;
                head = curr;

                delete tmp;
            }

            length--;

            // show();

            return;
        }

        while(i < index - 1) {
            curr = curr->next;
            i++;
        }

        ListNode* garbage = curr->next;

        if(curr->next->next) {
            curr->next = curr->next->next;

            if(tail == garbage) {
                tail = curr->next;
            }
        }else {
            curr->next = nullptr;

            if(tail == garbage) {
                tail = curr;
            }
        }


        delete garbage;

        length--;

        // show();
    }

    void show() {
        ListNode* curr = head;

        if(!curr) {
            cout << "EMPTY" << endl;

            return;
        }

        while(curr->next) {
            cout << curr->val << "->";

            curr = curr->next;
        }

        cout << curr -> val << endl;
        cout << "LEN:" << length << endl;
        cout << "HEAD:" << head->val << endl;
        cout << "TAIL:" << tail->val << endl;
        cout << endl;
    }
};

auto fn () -> MyLinkedList {
    MyLinkedList ls;
    ls.addAtHead(1);
    ls.addAtHead(1);
    ls.addAtHead(1);
    return ls;
}

int main () {
    // MyLinkedList linkedList;
    //
    // linkedList.addAtHead(1);
    // linkedList.addAtTail(2);
    // linkedList.addAtTail(3);
    //
    //
    // MyLinkedList linkedList2 = linkedList;
    //
    // linkedList.addAtHead(23);
    //
    // linkedList2.deleteAtIndex(1);
    //
    // linkedList.show();
    // linkedList2.show();
    //
    // linkedList.deleteAtIndex(1);
    // linkedList.addAtTail(4);
    //

    MyLinkedList x;

    x = fn();

    x.show();

    return 0;
}


