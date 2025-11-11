/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SUT,
  SUN,
}

const isWeekend = (day: WeekDay): boolean => day > 4;
