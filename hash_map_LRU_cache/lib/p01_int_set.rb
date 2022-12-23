class MaxIntSet
 
  attr_reader :max, :store
 
  def initialize(max)
    @max = max
    @store = Array.new(max){false}
  end

  def insert(num)
    raise 'Out of bounds' if num < 0 || num > max
    store[num] = true
  end

  def remove(num)
    store[num] = false
  end

  def include?(num)
    store.each_with_index do |ele, i|
      if i == num && ele == true
        return true
      end
    end
    false
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet

  attr_reader :store, :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num) 
    self[num] << num  
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    if self[num].include?(num)
      return true
    end
    false
  end

  private

  def [](num)
    store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_accessor :store, :count
  

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if self[num].include?(num)
      return
    end

    if self.count == num_buckets
      resize! 
    end
    
    self.count += 1
    self[num] << num 
  end

  def remove(num)
    if self.include?(num)
      self[num].delete(num)
      self.count -= 1
    end
  end

  def include?(num)
    if self[num].include?(num)
      return true
    end
    false
  end

  private

  def [](num)
    store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    store.length
  end

  def resize!
    old_store = store.dup #[[],[],[],[],[],[]]
    #new store below 
    self.store = Array.new(num_buckets * 2) {Array.new}
    self.count = 0
    old_store.each do |bucket| 
      bucket.each { |num| self.insert(num)}
    end
  end
end
