json.lists @lists do |list|
  json.(list, :id, :name, :created_at)
end
