//  改背景

// body
const body = document.body

// 畫面背景
const background_color = document.querySelectorAll('.td_content')

// 時鐘黑邊框
const clock_side = document.querySelectorAll(
	`#tr_clock_2 .td_clock_11,
  #tr_clock_2 .td_clock_12,
  #tr_clock_2 .td_clock_19,
  #tr_clock_2 .td_clock_20,
  #tr_clock_3 .td_clock_7,
  #tr_clock_3 .td_clock_8,
  #tr_clock_3 .td_clock_9,
  #tr_clock_3 .td_clock_10,
  #tr_clock_3 .td_clock_11,
  #tr_clock_3 .td_clock_12,
  #tr_clock_3 .td_clock_13,
  #tr_clock_3 .td_clock_18,
  #tr_clock_3 .td_clock_19,
  #tr_clock_3 .td_clock_20,
  #tr_clock_3 .td_clock_21,
  #tr_clock_3 .td_clock_22,
  #tr_clock_3 .td_clock_23,
  #tr_clock_3 .td_clock_24,
  #tr_clock_4 .td_clock_7,
  #tr_clock_4 .td_clock_8,
  #tr_clock_4 .td_clock_9,
  #tr_clock_4 .td_clock_10,
  #tr_clock_4 .td_clock_11,
  #tr_clock_4 .td_clock_12,
  #tr_clock_4 .td_clock_13,
  #tr_clock_4 .td_clock_17,
  #tr_clock_4 .td_clock_18,
  #tr_clock_4 .td_clock_19,
  #tr_clock_4 .td_clock_20,
  #tr_clock_4 .td_clock_21,
  #tr_clock_4 .td_clock_22,
  #tr_clock_4 .td_clock_23,
  #tr_clock_4 .td_clock_24,
  #tr_clock_5 .td_clock_5,
  #tr_clock_5 .td_clock_6,
  #tr_clock_5 .td_clock_25,
  #tr_clock_5 .td_clock_26,
  #tr_clock_6 .td_clock_5,
  #tr_clock_6 .td_clock_6,
  #tr_clock_6 .td_clock_25,
  #tr_clock_6 .td_clock_26,
  #tr_clock_7 .td_clock_4,
  #tr_clock_7 .td_clock_27,
  #tr_clock_8 .td_clock_2,
  #tr_clock_8 .td_clock_3,
  #tr_clock_8 .td_clock_28,
  #tr_clock_8 .td_clock_29,
  #tr_clock_9 .td_clock_2,
  #tr_clock_9 .td_clock_3,
  #tr_clock_9 .td_clock_28,
  #tr_clock_9 .td_clock_29,
  #tr_clock_10 .td_clock_2,
  #tr_clock_10 .td_clock_3,
  #tr_clock_10 .td_clock_28,
  #tr_clock_10 .td_clock_29,
  #tr_clock_11 .td_clock_2,
  #tr_clock_11 .td_clock_3,
  #tr_clock_11 .td_clock_28,
  #tr_clock_11 .td_clock_29,
  #tr_clock_12 .td_clock_2,
  #tr_clock_12 .td_clock_3,
  #tr_clock_12 .td_clock_28,
  #tr_clock_12 .td_clock_29,
  #tr_clock_13 .td_clock_2,
  #tr_clock_13 .td_clock_3,
  #tr_clock_13 .td_clock_28,
  #tr_clock_13 .td_clock_29,
  #tr_clock_14 .td_clock_2,
  #tr_clock_14 .td_clock_3,
  #tr_clock_14 .td_clock_28,
  #tr_clock_14 .td_clock_29,
  #tr_clock_15 .td_clock_2,
  #tr_clock_15 .td_clock_3,
  #tr_clock_15 .td_clock_28,
  #tr_clock_15 .td_clock_29,
  #tr_clock_16 .td_clock_2,
  #tr_clock_16 .td_clock_3,
  #tr_clock_16 .td_clock_28,
  #tr_clock_16 .td_clock_29,
  #tr_clock_17 .td_clock_2,
  #tr_clock_17 .td_clock_3,
  #tr_clock_17 .td_clock_28,
  #tr_clock_17 .td_clock_29,
  #tr_clock_18 .td_clock_2,
  #tr_clock_18 .td_clock_3,
  #tr_clock_18 .td_clock_28,
  #tr_clock_18 .td_clock_29,
  #tr_clock_19 .td_clock_2,
  #tr_clock_19 .td_clock_3,
  #tr_clock_19 .td_clock_28,
  #tr_clock_19 .td_clock_29,
  #tr_clock_20 .td_clock_2,
  #tr_clock_20 .td_clock_3,
  #tr_clock_20 .td_clock_28,
  #tr_clock_20 .td_clock_29,
  #tr_clock_21 .td_clock_2,
  #tr_clock_21 .td_clock_3,
  #tr_clock_21 .td_clock_28,
  #tr_clock_21 .td_clock_29,
  #tr_clock_22 .td_clock_2,
  #tr_clock_22 .td_clock_3,
  #tr_clock_22 .td_clock_28,
  #tr_clock_22 .td_clock_29,
  #tr_clock_23 .td_clock_2,
  #tr_clock_23 .td_clock_3,
  #tr_clock_23 .td_clock_28,
  #tr_clock_23 .td_clock_29,
  #tr_clock_24 .td_clock_2,
  #tr_clock_24 .td_clock_3,
  #tr_clock_24 .td_clock_28,
  #tr_clock_24 .td_clock_29,
  #tr_clock_25 .td_clock_4,
  #tr_clock_25 .td_clock_27,
  #tr_clock_26 .td_clock_4,
  #tr_clock_26 .td_clock_27,
  #tr_clock_27 .td_clock_5,
  #tr_clock_27 .td_clock_6,
  #tr_clock_27 .td_clock_25,
  #tr_clock_27 .td_clock_26,
  #tr_clock_28 .td_clock_7,
  #tr_clock_28 .td_clock_8,
  #tr_clock_28 .td_clock_9,
  #tr_clock_28 .td_clock_10,
  #tr_clock_28 .td_clock_11,
  #tr_clock_28 .td_clock_12,
  #tr_clock_28 .td_clock_13,
  #tr_clock_28 .td_clock_14,
  #tr_clock_28 .td_clock_15,
  #tr_clock_28 .td_clock_16,
  #tr_clock_28 .td_clock_17,
  #tr_clock_28 .td_clock_18,
  #tr_clock_28 .td_clock_19,
  #tr_clock_28 .td_clock_20,
  #tr_clock_28 .td_clock_21,
  #tr_clock_28 .td_clock_22,
  #tr_clock_28 .td_clock_23,
  #tr_clock_28 .td_clock_24,
  #tr_clock_29 .td_clock_7,
  #tr_clock_29 .td_clock_8,
  #tr_clock_29 .td_clock_9,
  #tr_clock_29 .td_clock_10,
  #tr_clock_29 .td_clock_11,
  #tr_clock_29 .td_clock_12,
  #tr_clock_29 .td_clock_13,
  #tr_clock_29 .td_clock_14,
  #tr_clock_29 .td_clock_15,
  #tr_clock_29 .td_clock_16,
  #tr_clock_29 .td_clock_17,
  #tr_clock_29 .td_clock_18,
  #tr_clock_29 .td_clock_19,
  #tr_clock_29 .td_clock_20,
  #tr_clock_29 .td_clock_21,
  #tr_clock_29 .td_clock_22,
  #tr_clock_29 .td_clock_23,
  #tr_clock_29 .td_clock_24`
)

//  時鐘本體紅色
const clock_red = document.querySelectorAll(
	`#tr_clock_2 .td_clock_13,
  #tr_clock_2 .td_clock_14,
  #tr_clock_2 .td_clock_15,
  #tr_clock_2 .td_clock_18,
  #tr_clock_2 .td_clock_19,
  #tr_clock_3 .td_clock_14,
  #tr_clock_3 .td_clock_15,
  #tr_clock_4 .td_clock_14,
  #tr_clock_4 .td_clock_15,
  #tr_clock_4 .td_clock_16,
  #tr_clock_5 .td_clock_7,
  #tr_clock_5 .td_clock_8,
  #tr_clock_5 .td_clock_9,
  #tr_clock_5 .td_clock_10,
  #tr_clock_5 .td_clock_11,
  #tr_clock_5 .td_clock_12,
  #tr_clock_5 .td_clock_13,
  #tr_clock_5 .td_clock_14,
  #tr_clock_5 .td_clock_15,
  #tr_clock_5 .td_clock_16,
  #tr_clock_5 .td_clock_17,
  #tr_clock_5 .td_clock_18,
  #tr_clock_5 .td_clock_19,
  #tr_clock_5 .td_clock_20,
  #tr_clock_5 .td_clock_21,
  #tr_clock_5 .td_clock_22,
  #tr_clock_5 .td_clock_23,
  #tr_clock_5 .td_clock_24,
  #tr_clock_6 .td_clock_7,
  #tr_clock_6 .td_clock_8,
  #tr_clock_6 .td_clock_9,
  #tr_clock_6 .td_clock_24,
  #tr_clock_6 .td_clock_25,
  #tr_clock_6 .td_clock_26,
  #tr_clock_7 .td_clock_5,
  #tr_clock_7 .td_clock_6,
  #tr_clock_7 .td_clock_8,
  #tr_clock_7 .td_clock_9,
  #tr_clock_7 .td_clock_24,
  #tr_clock_7 .td_clock_25,
  #tr_clock_7 .td_clock_26,
  #tr_clock_8 .td_clock_4,
  #tr_clock_8 .td_clock_7,
  #tr_clock_8 .td_clock_25,
  #tr_clock_8 .td_clock_26,
  #tr_clock_8 .td_clock_27,
  #tr_clock_9 .td_clock_4,
  #tr_clock_9 .td_clock_7,
  #tr_clock_9 .td_clock_25,
  #tr_clock_9 .td_clock_26,
  #tr_clock_9 .td_clock_27,
  #tr_clock_10 .td_clock_5,
  #tr_clock_10 .td_clock_6,
  #tr_clock_10 .td_clock_27,
  #tr_clock_11 .td_clock_5,
  #tr_clock_11 .td_clock_6,
  #tr_clock_11 .td_clock_27,
  #tr_clock_12 .td_clock_5,
  #tr_clock_12 .td_clock_6,
  #tr_clock_12 .td_clock_27,
  #tr_clock_13 .td_clock_5,
  #tr_clock_13 .td_clock_6,
  #tr_clock_13 .td_clock_27,
  #tr_clock_14 .td_clock_4,
  #tr_clock_14 .td_clock_5,
  #tr_clock_14 .td_clock_6,
  #tr_clock_14 .td_clock_27,
  #tr_clock_15 .td_clock_4,
  #tr_clock_15 .td_clock_5,
  #tr_clock_15 .td_clock_6,
  #tr_clock_15 .td_clock_27,
  #tr_clock_16 .td_clock_4,
  #tr_clock_16 .td_clock_5,
  #tr_clock_16 .td_clock_6,
  #tr_clock_16 .td_clock_27,
  #tr_clock_17 .td_clock_4,
  #tr_clock_17 .td_clock_5,
  #tr_clock_17 .td_clock_6,
  #tr_clock_17 .td_clock_27,
  #tr_clock_18 .td_clock_4,
  #tr_clock_18 .td_clock_5,
  #tr_clock_18 .td_clock_6,
  #tr_clock_18 .td_clock_27,
  #tr_clock_19 .td_clock_4,
  #tr_clock_19 .td_clock_5,
  #tr_clock_19 .td_clock_6,
  #tr_clock_19 .td_clock_27,
  #tr_clock_20 .td_clock_4,
  #tr_clock_20 .td_clock_5,
  #tr_clock_20 .td_clock_6,
  #tr_clock_20 .td_clock_27,
  #tr_clock_21 .td_clock_4,
  #tr_clock_21 .td_clock_5,
  #tr_clock_21 .td_clock_6,
  #tr_clock_21 .td_clock_27,
  #tr_clock_22 .td_clock_4,
  #tr_clock_22 .td_clock_5,
  #tr_clock_22 .td_clock_6,
  #tr_clock_22 .td_clock_27,
  #tr_clock_23 .td_clock_4,
  #tr_clock_23 .td_clock_5,
  #tr_clock_23 .td_clock_6,
  #tr_clock_23 .td_clock_27,
  #tr_clock_24 .td_clock_4,
  #tr_clock_24 .td_clock_5,
  #tr_clock_24 .td_clock_6,
  #tr_clock_24 .td_clock_7,
  #tr_clock_24 .td_clock_25,
  #tr_clock_24 .td_clock_26,
  #tr_clock_24 .td_clock_27,
  #tr_clock_24 .td_clock_4,
  #tr_clock_24 .td_clock_5,
  #tr_clock_24 .td_clock_6,
  #tr_clock_24 .td_clock_7,
  #tr_clock_24 .td_clock_26,
  #tr_clock_25 .td_clock_5,
  #tr_clock_25 .td_clock_6,
  #tr_clock_25 .td_clock_7,
  #tr_clock_25 .td_clock_8,
  #tr_clock_25 .td_clock_9,
  #tr_clock_25 .td_clock_24,
  #tr_clock_25 .td_clock_25,
  #tr_clock_25 .td_clock_26,
  #tr_clock_26 .td_clock_5,
  #tr_clock_26 .td_clock_6,
  #tr_clock_26 .td_clock_7,
  #tr_clock_26 .td_clock_8,
  #tr_clock_26 .td_clock_9,
  #tr_clock_26 .td_clock_24,
  #tr_clock_26 .td_clock_25,
  #tr_clock_26 .td_clock_26,
  #tr_clock_27 .td_clock_7,
  #tr_clock_27 .td_clock_8,
  #tr_clock_27 .td_clock_9,
  #tr_clock_27 .td_clock_10,
  #tr_clock_27 .td_clock_11,
  #tr_clock_27 .td_clock_12,
  #tr_clock_27 .td_clock_13,
  #tr_clock_27 .td_clock_14,
  #tr_clock_27 .td_clock_15,
  #tr_clock_27 .td_clock_16,
  #tr_clock_27 .td_clock_17,
  #tr_clock_27 .td_clock_18,
  #tr_clock_27 .td_clock_19,
  #tr_clock_27 .td_clock_20,
  #tr_clock_27 .td_clock_21,
  #tr_clock_27 .td_clock_22,
  #tr_clock_27 .td_clock_23,
  #tr_clock_27 .td_clock_24`
)

//  時鐘反光黃
const clock_yellow = document.querySelectorAll(`
#tr_clock_2 .td_clock_16,
#tr_clock_2 .td_clock_17,
#tr_clock_3 .td_clock_16,
#tr_clock_3 .td_clock_17,
#tr_clock_7 .td_clock_7,
#tr_clock_8 .td_clock_5,
#tr_clock_8 .td_clock_6,
#tr_clock_9 .td_clock_5,
#tr_clock_9 .td_clock_6,
#tr_clock_10 .td_clock_4,
#tr_clock_11 .td_clock_4,
#tr_clock_12 .td_clock_4,
#tr_clock_13 .td_clock_4`)

//  時鐘中間白
const clock_white = document.querySelectorAll(
	`#tr_clock_8 .td_clock_10,
  #tr_clock_8 .td_clock_13,
  #tr_clock_8 .td_clock_14,
  #tr_clock_8 .td_clock_15,
  #tr_clock_8 .td_clock_17,
  #tr_clock_8 .td_clock_18,
  #tr_clock_8 .td_clock_19,
  #tr_clock_8 .td_clock_22,
  #tr_clock_9 .td_clock_10,
  #tr_clock_9 .td_clock_13,
  #tr_clock_9 .td_clock_14,
  #tr_clock_9 .td_clock_15,
  #tr_clock_9 .td_clock_16,
  #tr_clock_9 .td_clock_17,
  #tr_clock_9 .td_clock_18,
  #tr_clock_9 .td_clock_19,
  #tr_clock_9 .td_clock_22,
  #tr_clock_10 .td_clock_8,
  #tr_clock_10 .td_clock_9,
  #tr_clock_10 .td_clock_10,
  #tr_clock_10 .td_clock_11,
  #tr_clock_10 .td_clock_12,
  #tr_clock_10 .td_clock_13,
  #tr_clock_10 .td_clock_14,
  #tr_clock_10 .td_clock_15,
  #tr_clock_10 .td_clock_16,
  #tr_clock_10 .td_clock_17,
  #tr_clock_10 .td_clock_18,
  #tr_clock_10 .td_clock_19,
  #tr_clock_10 .td_clock_20,
  #tr_clock_10 .td_clock_21,
  #tr_clock_10 .td_clock_22,
  #tr_clock_10 .td_clock_23,
  #tr_clock_10 .td_clock_24,
  #tr_clock_11 .td_clock_10,
  #tr_clock_11 .td_clock_11,
  #tr_clock_11 .td_clock_12,
  #tr_clock_11 .td_clock_13,
  #tr_clock_11 .td_clock_14,
  #tr_clock_11 .td_clock_15,
  #tr_clock_11 .td_clock_16,
  #tr_clock_11 .td_clock_17,
  #tr_clock_11 .td_clock_18,
  #tr_clock_11 .td_clock_19,
  #tr_clock_11 .td_clock_20,
  #tr_clock_11 .td_clock_21,
  #tr_clock_11 .td_clock_22,
  #tr_clock_12 .td_clock_10,
  #tr_clock_12 .td_clock_11,
  #tr_clock_12 .td_clock_12,
  #tr_clock_12 .td_clock_13,
  #tr_clock_12 .td_clock_14,
  #tr_clock_12 .td_clock_15,
  #tr_clock_12 .td_clock_16,
  #tr_clock_12 .td_clock_17,
  #tr_clock_12 .td_clock_18,
  #tr_clock_12 .td_clock_19,
  #tr_clock_12 .td_clock_20,
  #tr_clock_12 .td_clock_21,
  #tr_clock_12 .td_clock_22,
  #tr_clock_13 .td_clock_8,
  #tr_clock_13 .td_clock_9,
  #tr_clock_13 .td_clock_10,
  #tr_clock_13 .td_clock_11,
  #tr_clock_13 .td_clock_12,
  #tr_clock_13 .td_clock_13,
  #tr_clock_13 .td_clock_14,
  #tr_clock_13 .td_clock_15,
  #tr_clock_13 .td_clock_16,
  #tr_clock_13 .td_clock_17,
  #tr_clock_13 .td_clock_18,
  #tr_clock_13 .td_clock_19,
  #tr_clock_13 .td_clock_20,
  #tr_clock_13 .td_clock_21,
  #tr_clock_13 .td_clock_22,
  #tr_clock_13 .td_clock_23,
  #tr_clock_13 .td_clock_24,
  #tr_clock_14 .td_clock_8,
  #tr_clock_14 .td_clock_9,
  #tr_clock_14 .td_clock_10,
  #tr_clock_14 .td_clock_11,
  #tr_clock_14 .td_clock_12,
  #tr_clock_14 .td_clock_13,
  #tr_clock_14 .td_clock_14,
  #tr_clock_14 .td_clock_15,
  #tr_clock_14 .td_clock_16,
  #tr_clock_14 .td_clock_17,
  #tr_clock_14 .td_clock_18,
  #tr_clock_14 .td_clock_19,
  #tr_clock_14 .td_clock_20,
  #tr_clock_14 .td_clock_21,
  #tr_clock_14 .td_clock_22,
  #tr_clock_14 .td_clock_23,
  #tr_clock_14 .td_clock_24,
  #tr_clock_15 .td_clock_8,
  #tr_clock_15 .td_clock_9,
  #tr_clock_15 .td_clock_10,
  #tr_clock_15 .td_clock_11,
  #tr_clock_15 .td_clock_12,
  #tr_clock_15 .td_clock_13,
  #tr_clock_15 .td_clock_14,
  #tr_clock_15 .td_clock_15,
  #tr_clock_15 .td_clock_16,
  #tr_clock_15 .td_clock_17,
  #tr_clock_15 .td_clock_18,
  #tr_clock_15 .td_clock_19,
  #tr_clock_15 .td_clock_20,
  #tr_clock_15 .td_clock_21,
  #tr_clock_15 .td_clock_22,
  #tr_clock_15 .td_clock_23,
  #tr_clock_15 .td_clock_24,
  #tr_clock_16 .td_clock_10,
  #tr_clock_16 .td_clock_11,
  #tr_clock_16 .td_clock_12,
  #tr_clock_16 .td_clock_13,
  #tr_clock_16 .td_clock_14,
  #tr_clock_16 .td_clock_15,
  #tr_clock_16 .td_clock_16,
  #tr_clock_16 .td_clock_17,
  #tr_clock_16 .td_clock_18,
  #tr_clock_16 .td_clock_19,
  #tr_clock_16 .td_clock_20,
  #tr_clock_16 .td_clock_21,
  #tr_clock_16 .td_clock_22,
  #tr_clock_17 .td_clock_10,
  #tr_clock_17 .td_clock_11,
  #tr_clock_17 .td_clock_12,
  #tr_clock_17 .td_clock_13,
  #tr_clock_17 .td_clock_14,
  #tr_clock_17 .td_clock_15,
  #tr_clock_17 .td_clock_16,
  #tr_clock_17 .td_clock_17,
  #tr_clock_17 .td_clock_18,
  #tr_clock_17 .td_clock_19,
  #tr_clock_17 .td_clock_20,
  #tr_clock_17 .td_clock_21,
  #tr_clock_17 .td_clock_22,
  #tr_clock_18 .td_clock_8,
  #tr_clock_18 .td_clock_9,
  #tr_clock_18 .td_clock_10,
  #tr_clock_18 .td_clock_11,
  #tr_clock_18 .td_clock_12,
  #tr_clock_18 .td_clock_13,
  #tr_clock_18 .td_clock_14,
  #tr_clock_18 .td_clock_15,
  #tr_clock_18 .td_clock_16,
  #tr_clock_18 .td_clock_17,
  #tr_clock_18 .td_clock_18,
  #tr_clock_18 .td_clock_19,
  #tr_clock_18 .td_clock_20,
  #tr_clock_18 .td_clock_21,
  #tr_clock_18 .td_clock_22,
  #tr_clock_18 .td_clock_23,
  #tr_clock_18 .td_clock_24,
  #tr_clock_19 .td_clock_8,
  #tr_clock_19 .td_clock_9,
  #tr_clock_19 .td_clock_10,
  #tr_clock_19 .td_clock_11,
  #tr_clock_19 .td_clock_12,
  #tr_clock_19 .td_clock_13,
  #tr_clock_19 .td_clock_14,
  #tr_clock_19 .td_clock_15,
  #tr_clock_19 .td_clock_16,
  #tr_clock_19 .td_clock_17,
  #tr_clock_19 .td_clock_18,
  #tr_clock_19 .td_clock_19,
  #tr_clock_19 .td_clock_20,
  #tr_clock_19 .td_clock_21,
  #tr_clock_19 .td_clock_22,
  #tr_clock_19 .td_clock_23,
  #tr_clock_19 .td_clock_24,
  #tr_clock_20 .td_clock_10,
  #tr_clock_20 .td_clock_11,
  #tr_clock_20 .td_clock_12,
  #tr_clock_20 .td_clock_13,
  #tr_clock_20 .td_clock_14,
  #tr_clock_20 .td_clock_15,
  #tr_clock_20 .td_clock_16,
  #tr_clock_20 .td_clock_17,
  #tr_clock_20 .td_clock_18,
  #tr_clock_20 .td_clock_19,
  #tr_clock_20 .td_clock_20,
  #tr_clock_20 .td_clock_21,
  #tr_clock_20 .td_clock_22,
  #tr_clock_21 .td_clock_10,
  #tr_clock_21 .td_clock_11,
  #tr_clock_21 .td_clock_12,
  #tr_clock_21 .td_clock_13,
  #tr_clock_21 .td_clock_14,
  #tr_clock_21 .td_clock_15,
  #tr_clock_21 .td_clock_16,
  #tr_clock_21 .td_clock_17,
  #tr_clock_21 .td_clock_18,
  #tr_clock_21 .td_clock_19,
  #tr_clock_21 .td_clock_20,
  #tr_clock_21 .td_clock_21,
  #tr_clock_21 .td_clock_22,
  #tr_clock_22 .td_clock_8,
  #tr_clock_22 .td_clock_9,
  #tr_clock_22 .td_clock_10,
  #tr_clock_22 .td_clock_11,
  #tr_clock_22 .td_clock_12,
  #tr_clock_22 .td_clock_13,
  #tr_clock_22 .td_clock_14,
  #tr_clock_22 .td_clock_15,
  #tr_clock_22 .td_clock_16,
  #tr_clock_22 .td_clock_17,
  #tr_clock_22 .td_clock_18,
  #tr_clock_22 .td_clock_19,
  #tr_clock_22 .td_clock_20,
  #tr_clock_22 .td_clock_21,
  #tr_clock_22 .td_clock_22,
  #tr_clock_22 .td_clock_23,
  #tr_clock_22 .td_clock_24,
  #tr_clock_23 .td_clock_8,
  #tr_clock_23 .td_clock_9,
  #tr_clock_23 .td_clock_10,
  #tr_clock_23 .td_clock_11,
  #tr_clock_23 .td_clock_12,
  #tr_clock_23 .td_clock_13,
  #tr_clock_23 .td_clock_14,
  #tr_clock_23 .td_clock_15,
  #tr_clock_23 .td_clock_16,
  #tr_clock_23 .td_clock_17,
  #tr_clock_23 .td_clock_18,
  #tr_clock_23 .td_clock_19,
  #tr_clock_23 .td_clock_20,
  #tr_clock_23 .td_clock_21,
  #tr_clock_23 .td_clock_22,
  #tr_clock_23 .td_clock_23,
  #tr_clock_23 .td_clock_24,
  #tr_clock_24 .td_clock_10,
  #tr_clock_24 .td_clock_13,
  #tr_clock_24 .td_clock_14,
  #tr_clock_24 .td_clock_15,
  #tr_clock_24 .td_clock_17,
  #tr_clock_24 .td_clock_18,
  #tr_clock_24 .td_clock_19,
  #tr_clock_24 .td_clock_22,
  #tr_clock_24 .td_clock_23,
  #tr_clock_24 .td_clock_24`
)

// 時鐘綠
const clock_green = document.querySelectorAll(
	`#tr_clock_6 .td_clock_10,
  #tr_clock_6 .td_clock_11,
  #tr_clock_6 .td_clock_12,
  #tr_clock_6 .td_clock_13,
  #tr_clock_6 .td_clock_14,
  #tr_clock_6 .td_clock_15,
  #tr_clock_6 .td_clock_16,
  #tr_clock_6 .td_clock_17,
  #tr_clock_6 .td_clock_18,
  #tr_clock_6 .td_clock_19,
  #tr_clock_6 .td_clock_20,
  #tr_clock_6 .td_clock_21,
  #tr_clock_6 .td_clock_22,
  #tr_clock_6 .td_clock_23,
  #tr_clock_7 .td_clock_10,
  #tr_clock_7 .td_clock_11,
  #tr_clock_7 .td_clock_12,
  #tr_clock_7 .td_clock_13,
  #tr_clock_7 .td_clock_14,
  #tr_clock_7 .td_clock_15,
  #tr_clock_7 .td_clock_16,
  #tr_clock_7 .td_clock_17,
  #tr_clock_7 .td_clock_18,
  #tr_clock_7 .td_clock_19,
  #tr_clock_7 .td_clock_20,
  #tr_clock_7 .td_clock_21,
  #tr_clock_7 .td_clock_22,
  #tr_clock_7 .td_clock_23,
  #tr_clock_8 .td_clock_8,
  #tr_clock_8 .td_clock_9,
  #tr_clock_8 .td_clock_23,
  #tr_clock_8 .td_clock_24,
  #tr_clock_9 .td_clock_8,
  #tr_clock_9 .td_clock_9,
  #tr_clock_9 .td_clock_23,
  #tr_clock_9 .td_clock_24,
  #tr_clock_10 .td_clock_7,
  #tr_clock_10 .td_clock_25,
  #tr_clock_10 .td_clock_26,
  #tr_clock_11 .td_clock_7,
  #tr_clock_11 .td_clock_25,
  #tr_clock_11 .td_clock_26,
  #tr_clock_12 .td_clock_7,
  #tr_clock_12 .td_clock_25,
  #tr_clock_12 .td_clock_26,
  #tr_clock_13 .td_clock_7,
  #tr_clock_13 .td_clock_25,
  #tr_clock_13 .td_clock_26,
  #tr_clock_14 .td_clock_7,
  #tr_clock_14 .td_clock_25,
  #tr_clock_14 .td_clock_26,
  #tr_clock_15 .td_clock_7,
  #tr_clock_15 .td_clock_25,
  #tr_clock_15 .td_clock_26,
  #tr_clock_16 .td_clock_7,
  #tr_clock_16 .td_clock_25,
  #tr_clock_16 .td_clock_26,
  #tr_clock_17 .td_clock_7,
  #tr_clock_17 .td_clock_25,
  #tr_clock_17 .td_clock_26,
  #tr_clock_18 .td_clock_7,
  #tr_clock_18 .td_clock_25,
  #tr_clock_18 .td_clock_26,
  #tr_clock_19 .td_clock_7,
  #tr_clock_19 .td_clock_25,
  #tr_clock_19 .td_clock_26,
  #tr_clock_20 .td_clock_7,
  #tr_clock_20 .td_clock_25,
  #tr_clock_20 .td_clock_26,
  #tr_clock_21 .td_clock_7,
  #tr_clock_21 .td_clock_25,
  #tr_clock_21 .td_clock_26,
  #tr_clock_22 .td_clock_7,
  #tr_clock_22 .td_clock_25,
  #tr_clock_22 .td_clock_26,
  #tr_clock_23 .td_clock_7,
  #tr_clock_23 .td_clock_25,
  #tr_clock_23 .td_clock_26,
  #tr_clock_24 .td_clock_8,
  #tr_clock_24 .td_clock_9,
  #tr_clock_24 .td_clock_24,
  #tr_clock_24 .td_clock_25,
  #tr_clock_25 .td_clock_10,
  #tr_clock_25 .td_clock_11,
  #tr_clock_25 .td_clock_12,
  #tr_clock_25 .td_clock_13,
  #tr_clock_25 .td_clock_14,
  #tr_clock_25 .td_clock_15,
  #tr_clock_25 .td_clock_16,
  #tr_clock_25 .td_clock_17,
  #tr_clock_25 .td_clock_18,
  #tr_clock_25 .td_clock_19,
  #tr_clock_25 .td_clock_20,
  #tr_clock_25 .td_clock_21,
  #tr_clock_25 .td_clock_22,
  #tr_clock_25 .td_clock_23,
  #tr_clock_26 .td_clock_10,
  #tr_clock_26 .td_clock_11,
  #tr_clock_26 .td_clock_12,
  #tr_clock_26 .td_clock_13,
  #tr_clock_26 .td_clock_14,
  #tr_clock_26 .td_clock_15,
  #tr_clock_26 .td_clock_16,
  #tr_clock_26 .td_clock_17,
  #tr_clock_26 .td_clock_18,
  #tr_clock_26 .td_clock_19,
  #tr_clock_26 .td_clock_20,
  #tr_clock_26 .td_clock_21,
  #tr_clock_26 .td_clock_22,
  #tr_clock_26 .td_clock_23`
)

const background_change = () => {
	const date = new Date()
	const min = date.getMinutes()
	const background_min = Math.floor(min / 10)
	console.log(background_min)

	if (background_min === 3) {
		for (const el of background_color) {
			el.style.background = '#000'
			el.style.border = '0.05px solid rgb(46, 46, 46)'
		}

		for (const el2 of clock_side) {
			el2.style.border = '0.05px solid rgb(100, 100, 100)'
		}

		for (const el3 of clock_red) {
			el3.style.border = '0.05px solid rgb(100, 100, 100)'
		}

		for (const el4 of clock_yellow) {
			el4.style.border = '0.05px solid rgb(100, 100, 100)'
		}

		// for (const el5 of clock_white) {
		// 	el5.style.border = '0.05px solid rgb(100, 100, 100)'
		// }
		for (const el6 of clock_green) {
			el6.style.border = '0.05px solid rgb(100, 100, 100)'
		}

		body.style.background = 'rgb(46, 46, 46)'

		console.log(body)
	} else {
		for (const el of background_color) {
			el.style.background = 'rgb(255, 238, 208)'
			el.style.border = '0.05px solid rgb(218, 218, 218)'
		}

		for (const el2 of clock_side) {
			el2.style.border = '0.05px solid  rgb(218, 218, 218)'
		}

		for (const el3 of clock_red) {
			el3.style.border = '0.05px solid  rgb(218, 218, 218)'
		}

		for (const el4 of clock_yellow) {
			el4.style.border = '0.05px solid  rgb(218, 218, 218)'
		}

		// for (const el5 of clock_white) {
		// 	el5.style.border = '0.05px solid  rgb(218, 218, 218)'
		// }
		for (const el6 of clock_green) {
			el6.style.border = '0.05px solid  rgb(218, 218, 218)'
		}

		body.style.background = ' rgb(218, 218, 218)'
	}
}
background_change()
setInterval(background_change, 1000)

// const bad_mushroom_color = document.querySelectorAll(`
// #tr_bad_mushroom_R_1 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_1 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_2 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_2 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_2 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_2 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_3 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_3 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_3 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_3 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_3 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_3 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_4 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_4 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_4 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_4 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_2,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_3,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_11,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_2,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_3,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_11,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_1,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_2,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_3,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_11,
// #tr_bad_mushroom_R_7 .td_bad_mushroom_12,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_1,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_2,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_3,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_11,
// #tr_bad_mushroom_R_8 .td_bad_mushroom_12,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_2,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_3,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_11,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_9 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_10 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_10 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_10 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_10 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_10 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_10 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_12 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_12 .td_bad_mushroom_7
// #tr_bad_mushroom_R_4 .td_bad_mushroom_3,
// #tr_bad_mushroom_R_4 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_4 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_4 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_5 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_6,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_7,
// #tr_bad_mushroom_R_6 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_10 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_3,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_11 .td_bad_mushroom_11,
// #tr_bad_mushroom_R_12 .td_bad_mushroom_4,
// #tr_bad_mushroom_R_12 .td_bad_mushroom_5,
// #tr_bad_mushroom_R_12 .td_bad_mushroom_8,
// #tr_bad_mushroom_R_12 .td_bad_mushroom_9,
// #tr_bad_mushroom_R_12 .td_bad_mushroom_10,
// #tr_bad_mushroom_R_12 .td_bad_mushroom_11,
// #tr_bad_mushroom_L_1 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_1 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_2 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_2 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_2 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_2 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_3 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_3 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_3 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_3 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_3 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_3 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_4 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_4 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_4 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_4 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_2,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_10,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_11,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_2,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_10,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_11,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_1,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_2,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_10,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_11,
// #tr_bad_mushroom_L_7 .td_bad_mushroom_12,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_1,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_2,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_10,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_11,
// #tr_bad_mushroom_L_8 .td_bad_mushroom_12,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_2,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_10,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_11,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_9 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_10 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_10 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_10 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_10 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_10 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_10 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_12 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_12 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_4 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_4 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_4 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_4 .td_bad_mushroom_10,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_5 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_6,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_7,
// #tr_bad_mushroom_L_6 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_10 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_2,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_9,
// #tr_bad_mushroom_L_11 .td_bad_mushroom_10,
// #tr_bad_mushroom_L_12 .td_bad_mushroom_2,
// #tr_bad_mushroom_L_12 .td_bad_mushroom_3,
// #tr_bad_mushroom_L_12 .td_bad_mushroom_4,
// #tr_bad_mushroom_L_12 .td_bad_mushroom_5,
// #tr_bad_mushroom_L_12 .td_bad_mushroom_8,
// #tr_bad_mushroom_L_12 .td_bad_mushroom_9,
// `)
