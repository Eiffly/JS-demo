/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    m = nums1.length
    n = nums2.length
    /*二分查找第 k 小的数对和的大小*/
    let left = nums1[0] + nums2[0];
    let right = nums1[m - 1] + nums2[n - 1];
    let pairSum = right;
    while (left < right) {
        const mid = left + ((right - left) >> 1);
        console.log(mid);
        let cnt = 0;
        let start = 0;
        let end = n - 1;
        while (start < m && end >= 0) {
            if (nums1[start] + nums2[end] > mid) {
                end--;
            } else {
                cnt += end + 1;
                start++;
            }
        }
        if (cnt < k) {
            left = mid + 1;
        } else {
            pairSum = mid;
            right = mid - 1;
        }
    }

    const ans = [];
    let pos = n - 1;
    /*找到小于目标值 pairSum 的数对*/
    for (let i = 0; i < m; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] >= pairSum) {
            pos--;
        }
        for (let j = 0; j <= pos && k > 0; j++, k--) {
            const list = [];
            list.push(nums1[i]);
            list.push(nums2[j]);
            ans.push(list);
        }
    }

    /*找到等于目标值 pairSum 的数对*/
    pos = n - 1;
    for (let i = 0; i < m && k > 0; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] > pairSum) {
            pos--;
        }
        for (let j = i; k > 0 && j >= 0 && nums1[j] + nums2[pos] == pairSum; j--, k--) {
            const list = [];
            list.push(nums1[i]);
            list.push(nums2[pos]);
            ans.push(list);
        }
    }
    return ans;
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
// console.log(kSmallestPairs([1, 7, 11], [2, 4], 3));
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
console.log(kSmallestPairs([1, 2], [3], 3));