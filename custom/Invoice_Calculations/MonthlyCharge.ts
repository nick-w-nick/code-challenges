export interface User {
  id: number;
  name: string;
  activatedOn: Date;
  deactivatedOn: Date | null;
  customerId: number;
}

export interface Subscription {
  id: number;
  customerId: number;
  monthlyPriceInCents: number;
}

/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param subscription - May be null
 *   If present, has the following structure (see Subscription interface):
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param users - May be empty, but not null
 *   Has the following structure (see User interface):
 *   [
 *     {
 *       id: 1,
 *       name: "Employee #1",
 *       customerId: 1,
 *   
 *       // when this user started
 *       activatedOn: new Date("2021-11-04"),
 *   
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       deactivatedOn: new Date("2022-04-10")
 *     },
 *     {
 *       id: 2,
 *       name: "Employee #2",
 *       customerId: 1,
 *   
 *       // when this user started
 *       activatedOn: new Date("2021-12-04"),
 *   
 *       // hasn't been deactivated yet
 *       deactivatedOn: null
 *     },
 *   ]
 */
export function monthlyCharge(yearMonth: string, subscription: Subscription | null, users: User[]): number {
  if (!subscription) {
    return 0;
  }

  const {
    customerId: subscriptionCustomerId,
  } = subscription;

  const { monthlyTotal } = users.reduce<{ monthlyTotal: number }>((acc, curr) => {
    const {
      activatedOn,
      customerId,
      deactivatedOn,
      id,
      name,
    } = curr;
    
    const activatedOnInMillis = activatedOn.valueOf();
    const deactivatedOnInMillis = deactivatedOn?.valueOf();
    
    const [year, month] = yearMonth.split('-');
    
    const currentMonthDate = new Date(parseInt(year), parseInt(month), 0);
    const firstDayOfCurrentMonth = firstDayOfMonth(currentMonthDate);
    const lastDayOfCurrentMonth = lastDayOfMonth(currentMonthDate);
    
    const firstDayOfCurrentMonthInMillis = firstDayOfCurrentMonth.valueOf();
    const lastDayOfCurrentMonthInMillis = lastDayOfCurrentMonth.valueOf();
    
    // user will be activated in the future
    if (activatedOnInMillis > lastDayOfCurrentMonthInMillis) {
      return acc;
    }
    
    const matchingSubscription = subscriptionCustomerId === customerId ? subscription : {} as Subscription;
    
    if (!matchingSubscription?.id) {
      return acc;
    }
    
    const { monthlyPriceInCents } = matchingSubscription;
    
    if (deactivatedOn && deactivatedOnInMillis) {
      // user was deactivated before the first of the current month, don't bill
      if (deactivatedOnInMillis < firstDayOfCurrentMonthInMillis) {
        return acc;
      }
      
      // if user was deactivated during the _current_ month, prorate their total
      if (
        deactivatedOnInMillis > firstDayOfCurrentMonthInMillis
        && deactivatedOnInMillis < lastDayOfCurrentMonthInMillis
      ) {
        const daysInMonth = lastDayOfCurrentMonth.getUTCDate(); // the current day on the last day of the month is the total days in the month
        const dayDeactivated = deactivatedOn.getUTCDate();
        
        const numberOfDaysActive = daysInMonth - (daysInMonth - dayDeactivated);
        const costPerDay = monthlyPriceInCents / daysInMonth;
        
        // 
        acc.monthlyTotal = Math.round(acc.monthlyTotal + (costPerDay * numberOfDaysActive))
      }
    } else {
      // bill like normal
      acc.monthlyTotal = acc.monthlyTotal + monthlyPriceInCents;
    }
    
    return acc;
  }, { monthlyTotal: 0 });
  
  return monthlyTotal;
}

const users = [
  {
    id: 1,
    name: 'Employee #1',
    activatedOn: new Date('2019-01-01'),
    deactivatedOn: new Date('2020-12-30'),
    customerId: 1,
  },
  {
    id: 2,
    name: 'Employee #2',
    activatedOn: new Date('2019-01-01'),
    deactivatedOn: new Date('2020-12-31'),
    customerId: 1,
  },
];

const plan = {
  id: 1,
  customerId: 1,
  monthlyPriceInCents: 5000,
};

console.log(monthlyCharge('2020-12', plan, users))

/*******************
* Helper functions *
*******************/

/**
  Takes a Date instance and returns a Date which is the first day
  of that month. For example:

  firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)

  Input type: Date
  Output type: Date
**/
function firstDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
  Takes a Date object and returns a Date which is the last day
  of that month. For example:

  lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)

  Input type: Date
  Output type: Date
**/
function lastDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
  Takes a Date object and returns a Date which is the next day.
  For example:

  nextDay(new Date(2022, 3, 17)) // => new Date(2022, 3, 18)
  nextDay(new Date(2022, 3, 31)) // => new Date(2022, 4, 1)

  Input type: Date
  Output type: Date
**/
function nextDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}