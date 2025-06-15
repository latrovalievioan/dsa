 // Definition for singly-linked list.
struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
         ListNode* newListHead = new ListNode();
         auto newCurr = newListHead;
         auto list1Curr = list1;
         auto list2Curr = list2;

         while(list1Curr->next && list2Curr->next) {
            if(list1Curr->val > list2Curr->val) {
                 newCurr->next = list2Curr;
                 newCurr = newCurr->next;
                 list2Curr = list2Curr->next;
            } else {
                 newCurr->next = list1Curr;
                 newCurr = newCurr->next;
                 list1Curr = list1Curr->next;
            }
         }

         if(list1Curr->next) {
            newCurr->next = list1Curr->next;
         }else {
            newCurr->next = list2Curr->next;
         }

         return newListHead;
    }
};
