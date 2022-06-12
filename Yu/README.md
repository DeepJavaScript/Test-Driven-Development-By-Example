# Yu Blog of Test-Driven-Development-By-Example
- [Yu Blog of Test-Driven-Development-By-Example](#yu-blog-of-test-driven-development-by-example)
  - [Chapter 1. Multi-Currency Money](#chapter-1-multi-currency-money)
  - [Chapter 4. Privacy](#chapter-4-privacy)
  - [Chapter 5. Franc-ly Speaking](#chapter-5-franc-ly-speaking)

## Chapter 1. Multi-Currency Money

Before reading chapter 1, I skip the `Introduction` section and I feel pity. I was like what are we doing here? after reading the first paragraph of chapter 1. Also, I really like the rhythm in Part I, especially the `small and ugly`, I just can not agree more. Chapter 1, most likely was a tour of how this book is structured. it brings us to the phase of writing the very first test case. Discussed how be prepare a fail test case, and how can we do the ugly change to make it pass. Moreover, we need the patience to spot the Duplication and refactor it before jumping to the next todos.

I feel surprised that Kent treat the copy of data as duplication.

And I am convinced that TDD is `being able to take teeny-tiny steps`. in other words, flexibility. 

## Chapter 4. Privacy

- [x] Used functionality just developed to improve a test
- [x] Noticed that if two tests fail at once we're sunk 
- [x] Proceeded in spite of the risk
- [x] Used new functionality in the object under test to reduce coupling between the tests and the code

## Chapter 5. Franc-ly Speaking

done:
- Couldn't tackle a big test, so we invented a small test that represented progress
- Wrote the test by shamelessly duplicating and editing
- Even worse, made the test work by copying and editing model code wholesale 
- Promised ourselves we wouldn't go home until the duplication was gone

## Chapter 6. Equality for All, Redux

- Stepwise moved common code from one class (Dollar) to a superclass (Money)
- Made a second class (Franc) a subclass also
- Reconciled two implementations - equals() - before eliminating the redundant one

## Chapter 7. Apples and Oranges

- Took a step toward eliminating duplication by reconciling the signatures of two variants of the same method - times()
- Moved at least a declaration of the method to the common superclass
- Decoupled test code from the existence of concrete subclasses by introducing factory methods 
- Noticed that when the subclasses disappear some tests will be redundant, but took no action

## Chapter 8. Makin' Objects

- Took a step toward eliminating duplication by reconciling the signatures of two variants of the same method - times()
- Moved at least a declaration of the method to the common superclass
- Decoupled test code from the existence of concrete subclasses by introducing factory methods Noticed that when the subclasses disappear some tests will be redundant, but took no action

## Chapter 9. Times We're Livin' In

- Were a little stuck on big design ideas, so we worked on something small we noticed earlier 
- Reconciled the two constructors by moving the variation to the caller (the factory method) 
- Interrupted a refactoring for a little twist, using the factory method in times()
- Repeated an analogous refactoring (doing to Dollar what we just did to Franc) in one big step
- Pushed up the identical constructors

## Chapter 10. Interesting Times
- Reconciled two methods - times() - by first inlining the methods they called and then replacing constants with variables
- Wrote a toString() without a test just to help us debug
- Tried a change (returning Money instead of Franc) and let the tests tell us whether it worked
- Backed out an experiment and wrote another test. Making the test work made the experiment work

## Chapter 11. The Root of All Evil

- Finished gutting subclasses and deleted them
- Eliminated tests that made sense with the old code structure but were redundant with the new code structure

## Chapter 12. Addition, Finally
- Reduced a big test to a smaller test that represented progress ($5 + 10 CHF to $5 + $5) 
- Thought carefully about the possible metaphors for our computation
- Rewrote our previous test based on our new metaphor
- Got the test to compile quickly
- Made it run
- Looked forward with a bit of trepidation to the refactoring necessary to make the implementation real

##Chapter 13. Make It
- Didn't mark a test as done because the duplication had not been eliminated 
- Worked forward instead of backward to realize the implementation
- Wrote a test to force the creation of an object we expected to need later (Sum)
- Started implementing faster (the Sum constructor)
- Implemented code with casts in one place, then moved the code where it belonged once the tests were running
- Introduced polymorphism to eliminate explicit class checking
