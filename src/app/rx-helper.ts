import * as NodeTypes from './node-types';
export class RxHelper {
  public static operators = [
    {
      name: 'Creating Observables',
      desc: 'Operators that originate new Observables.',
      list: [
        NodeTypes.Create,
        NodeTypes.Defer,
        // Empty/Never/Throw
        NodeTypes.From,
        NodeTypes.FromEvent,
        NodeTypes.Interval,
        // NodeTypes.Just,
        NodeTypes.Range,
        // NodeTypes.Start,
        NodeTypes.Timer
      ]
    },
    {
      name: 'Transforming Observables',
      desc: 'Operators that transform items that are emitted by an Observable.',
      list: [
        NodeTypes.BufferWithCount,
        NodeTypes.FlatMap,
        NodeTypes.Map,
        NodeTypes.Scan,
        NodeTypes.Pluck,
        NodeTypes.Repeat,
        NodeTypes.GroupBy,
        NodeTypes.WindowWithCount,
      ]
    },
    {
      name: 'Filtering Observables',
      desc: 'Operators that selectively emit items from a source Observable.',
      list: [
        NodeTypes.Debounce,
        NodeTypes.Distinct,
        NodeTypes.IgnoreElements,
        NodeTypes.ElementAt,
        NodeTypes.Filter,
        NodeTypes.First,
        NodeTypes.Last,
        NodeTypes.Sample,
        NodeTypes.Skip,
        NodeTypes.SkipLast,
        NodeTypes.Take,
        NodeTypes.TakeLast,
      ]
    },
    {
      name: 'Combining Observables',
      desc: 'Operators that work with multiple source Observables to create a single Observable',
      list: [
        // And/Then/When
        // CombineLatest
        NodeTypes.Join,
        NodeTypes.Merge,
        NodeTypes.StartWith,
        NodeTypes.Switch,
        NodeTypes.Zip,
      ]
    },
    {
      name: 'Error Handling Operators',
      desc: 'Operators that help to recover from error notifications from an Observable',
      list: [
        NodeTypes.Catch,
        NodeTypes.Retry
      ]
    },
    {
      name: 'Observable Utility Operators',
      desc: 'A toolbox of useful Operators for working with Observables',
      list: [
        NodeTypes.Delay,
        NodeTypes.Do,
        // Materialize/Dematerialize
        // ObserveOn
        // Serialize
        NodeTypes.Subscribe,
        // NodeTypes.SubscribeOn,
        // NodeTypes.TimeInterval,
        NodeTypes.Timeout,
        // NodeTypes.Timestamp,
        // NodeTypes.Using,
      ]
    },
    {
      name: 'Conditional and Boolean Operators',
      desc: 'Operators that evaluate one or more Observables or items emitted by Observables',
      list: [
        NodeTypes.All,
        NodeTypes.Race,
        NodeTypes.Contains,
        NodeTypes.SequenceEqual,
        NodeTypes.SkipUntil,
        NodeTypes.SkipWhile,
        NodeTypes.TakeUntil,
        NodeTypes.TakeWhile,
      ]
    },
    {
      name: 'Mathematical and Aggregate Operators',
      desc: 'Operators that operate on the entire sequence of items emitted by an Observable',
      list: [
        NodeTypes.Average,
        // NodeTypes.Concat,
        NodeTypes.Count,
        NodeTypes.Max,
        NodeTypes.Min,
        // NodeTypes.Reduce,
        NodeTypes.Sum,
      ]
    },
    {
      name: 'Connectable Observable Operators',
      desc: 'Specialty Observables that have more precisely-controlled subscription dynamics',
      list: [
        NodeTypes.Connect,
        NodeTypes.Publish,
        NodeTypes.RefCount,
        NodeTypes.Replay,
      ]
    }
  ];
  public static getRxOperator() {
    return this.operators;
  }
  constructor() {
  }
}
